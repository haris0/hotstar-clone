'use client'

import styles from "./content-card.module.css";

import Image from 'next/image';
import Link from 'next/link'
import { useState, MouseEvent } from "react";

const placeholdImage = (title: string) => `https://placehold.co/260x400?text=${title}`;

export interface ContentCardProps {
  id: number;
  title: string;
  overview: string;
  imageUrl: string;
  mediaType: string;
  onClickWatchlist?: (content: Omit<ContentCardProps, 'onClickWatchlist'>) => void;
}

const ContentCard = ({id, title, overview, imageUrl, mediaType, onClickWatchlist}: ContentCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClickWatchlist = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClickWatchlist?.({
      id,
      title,
      overview,
      imageUrl,
      mediaType
    });
  }
  
  return (
    <div 
      className={styles.card_container}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div className={styles.image_container}>
        <Image
          src={imageUrl || placeholdImage(title)}
          placeholder="blur"
          blurDataURL={imageUrl || placeholdImage(title)}
          alt={title}
          sizes="auto"
          fill
          className={styles.image}
        />
        <Link href={`/${mediaType}/${id}`}>
          <div
            className={styles.hoverd_card}
            style={{
              opacity: isHovering ? 1 : 0,
              backgroundImage:`
                linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 100%), 
                url(${imageUrl || placeholdImage(title)})
              `,
            }}
          >
            <div className={styles.hover_content}>
              <h3 className={styles.title}>{title}</h3>
              <button 
                className={styles.watchlist_button}
                onClick={handleClickWatchlist}
              >+ Add To Watchlist</button>
              <p className={styles.overview}>{overview}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.inline_title}>
        <b>{title}</b>
      </div>
    </div>
  );
};

export default ContentCard;
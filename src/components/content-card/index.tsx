'use client'

import styles from "./content-card.module.css";

import Image from 'next/image';
import { useState } from "react";

const placeholdImage = (title: string) => `https://placehold.co/260x400?text=${title}`;

export interface ContentCardProps {
  id: number;
  title: string;
  overview: string;
  imageUrl: string;
  mediaType: string;
}

const ContentCard = ({title, overview, imageUrl}: ContentCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
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
              <button className={styles.watchlist_button}>+ Add To Watchlist</button>
              <p className={styles.overview}>{overview}</p>
            </div>
          </div>
      </div>
      <div className={styles.inline_title}>
        <b>{title}</b>
      </div>
    </div>
  );
};

export default ContentCard;
'use client'

import { Content } from "@/models/content";
import styles from "./content-card.module.css";

import Image from 'next/image';
import Link from 'next/link'
import { useState } from "react";
import WatchlistButton from "../watchlist-button";

const placeholdImage = (title: string) => `https://placehold.co/260x400?text=${title}`;

const ContentCard = ({ id, title, overview, imageUrl, mediaType }: Content) => {
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
        {isHovering && (
          <Link href={`/${mediaType}/${id}`}>
            <div
              className={styles.hoverd_card}
              style={{
                backgroundImage:`
                  linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 100%), 
                  url(${imageUrl || placeholdImage(title)})
                `,
              }}
            >
              <div className={styles.hover_content}>
                <h3 className={styles.title}>{title}</h3>
                  <WatchlistButton content={{ id, title, overview, imageUrl, mediaType }} />
                <p className={styles.overview}>{overview}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className={styles.inline_title}>
        <b>{title}</b>
      </div>
    </div>
  );
};

export default ContentCard;
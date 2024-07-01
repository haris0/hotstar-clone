'use client'

import styles from "./content-card.module.css";

import { useMediaQuery } from '@/hooks/useMeduaQuery';
import Image from 'next/image';

interface ContentCardProps {
  title: string;
  overview: string;
  imageUrl: string;
}

const ContentCard = ({title, overview, imageUrl}: ContentCardProps) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <Image
          src={imageUrl}
          placeholder="blur"
          blurDataURL={imageUrl}
          alt={title}
          sizes="100vw"
          objectFit="cover"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.inline_title}>
        <b>{title}</b>
      </div>
    </div>
  );
};

export default ContentCard;
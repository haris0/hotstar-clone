'use client'

import { useEffect, useState } from 'react';
import styles from './banner.module.css';
import { Movie } from '@/models/movie';
import { getFullBgUrl } from '@/repositories/constants';
import { getYear } from '@/helpers/getYear';

type props = {
  movies: Movie[];
}

const Banner = ({
  movies,
}: props) => {
  const [bannerIdx, setBannerIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIdx((prev) => (
        prev === movies.length ? 0 : prev + 1
      ));
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [movies.length]);

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `
          linear-gradient( rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6) ), 
          url(${getFullBgUrl(movies?.[bannerIdx]?.backdrop_path)})
        `,
        transition: 'background-image 2s linear',
      }}
    >
      <div>
        <h2>{movies?.[bannerIdx]?.title}</h2>
        <p className={styles.overview}>{movies?.[bannerIdx]?.overview}</p>
        <b>{getYear(movies?.[bannerIdx]?.release_date || '')}</b> 
      </div>
    </div>
  )
};

export default Banner;
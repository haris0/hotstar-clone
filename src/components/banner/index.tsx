'use client'

import { useEffect, useState } from 'react';
import styles from './banner.module.css';
import { Movie } from '@/models/movie';
import { getFullBgUrl } from '@/repositories/constants';
import { getYear } from '@/helpers/getYear';
import { useMediaQuery } from '@/hooks/useMeduaQuery';

type props = {
  movies: Movie[];
}

const Banner = ({
  movies,
}: props) => {
  const [bannerIdx, setBannerIdx] = useState(0);
  const isMobile = useMediaQuery("(max-width: 480px)");

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
          linear-gradient(${isMobile ? '0deg' : '90deg'}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%), 
          url(${getFullBgUrl(movies?.[bannerIdx]?.backdrop_path)})
        `,
      }}
    >
      <div>
        <h2>{movies?.[bannerIdx]?.title}</h2>
        <p className={`${styles.overview} ${isMobile ? styles.max_four_line : ''}`}>{movies?.[bannerIdx]?.overview}</p>
        <b >{getYear(movies?.[bannerIdx]?.release_date || '')}</b> 
      </div>
    </div>
  )
};

export default Banner;
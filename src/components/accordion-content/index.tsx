'use client'

import { useState } from "react";
import { Movie } from "@/models/movie";
import { getFullPosterUrl } from "@/repositories/constants";

import ContentCard from "../content-card";
import styles from './accordion-content.module.css';

interface AccordionContentProps {
  contents: Movie[];
}

const SHOW_LESS = 15;

const AccordionContent = ({ contents }: AccordionContentProps) => {
  const [showCount, setShowCount] = useState(SHOW_LESS);

  return (
    <div className={styles.toprated_container}>
      {contents?.slice(0, showCount).map((movie) => (
        <ContentCard
          key={movie.id} 
          title={movie.title}
          overview={movie.overview}
          imageUrl={getFullPosterUrl(movie.poster_path)}
        />
      ))}
      {showCount === SHOW_LESS && (
        <button 
          onClick={() => setShowCount(contents.length)}
          className={styles.button_show}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default AccordionContent;
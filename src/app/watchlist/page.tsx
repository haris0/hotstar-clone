'use client'

import { useState } from "react";
import AccordionContent from "@/components/accordion-content";
import { useWatchlistContext } from "@/context/WatchlistContext";
import styles from "./page.module.css";

const Watchlist = () => {
  const { watchlist } = useWatchlistContext();
  const [keyword, setKeyword] = useState('');
  
  return (
    <main className={styles.main}>
      <h2 className={styles.title_page}>Watchlist</h2> 
      {watchlist.length > 0 && (
        <>
          <input 
            type="text"
            placeholder="Search on watchlist"
            className={styles.search_input}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <AccordionContent 
            contents={
              watchlist.filter(
                (watch) => watch.title.toLowerCase().includes(keyword.toLowerCase())
              )}
          />
        </>
      )}
      {watchlist.length < 1 && (
        <span className={styles.placeholder}>Your watchlist will goes here</span>
      )}
    </main>
  );
};

export default Watchlist;
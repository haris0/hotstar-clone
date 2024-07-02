'use client'

import AccordionContent from "@/components/accordion-content";
import { useWatchlistContext } from "@/context/WatchlistContext";
import styles from "./page.module.css";

const Watchlist = () => {
  const { watchlist } = useWatchlistContext();
  return (
    <main className={styles.main}>
      <h2 className={styles.title_page}>Watchlist</h2> 
      {watchlist.length > 0 && (
        <AccordionContent contents={watchlist}/>
      )}
      {watchlist.length < 1 && (
        <span className={styles.placeholder}>Your watchlist will goes here</span>
      )}
    </main>
  );
};

export default Watchlist;
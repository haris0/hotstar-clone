'use client'

import { MouseEvent } from 'react';
import { useWatchlistContext } from '@/context/WatchlistContext';
import styles from './watchlist-button.module.css'
import { Content } from '@/models/content';

interface WatchlistButtonProps {
  content: Content
}

const WatchlistButton = ({ content }: WatchlistButtonProps) => {
  const { addWatchlist, removeWatchlist, checkWatchlist } = useWatchlistContext();
  const isAdded = checkWatchlist(content.id);

  const handleClickWatchlist = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if(isAdded) {
      removeWatchlist(content.id);
    } else {
      addWatchlist(content)
    }
  }
  return (
    <button 
      className={styles.watchlist_button}
      onClick={handleClickWatchlist}
    >
      {isAdded ? '√ Added to watchlist' : '+ Add to watchlist'}
    </button>
  );
};

export default WatchlistButton;
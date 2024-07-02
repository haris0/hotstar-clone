'use client';

import { Content } from '@/models/content';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const STORAGE_KEY = 'watchlist';

export interface WatchlistContext{
  watchlist : Content[];
  addWatchlist : (content : Content) => void;
  removeWatchlist : (id : number) => void;
  checkWatchlist : (id : number) => boolean;
}

const initialValue: WatchlistContext = {
  watchlist: [],
  addWatchlist: () => undefined,
  removeWatchlist: () => undefined,
  checkWatchlist: () => false,
};

const WatchlistContext = createContext<WatchlistContext>(initialValue);

type props = {
  children: ReactNode;
};

const WatchlistContextProvider = ({ children }: props) => {
  const initialRender = useRef(true);
  const [watchlist, setWatchlist] = useState<Content[]>(initialValue.watchlist);

  const addWatchlist= (newContent: Content) => {
    setWatchlist((prev) => [...prev, newContent]);
  };

  const removeWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  const checkWatchlist = (id: number) => watchlist.some((item) => item.id === id);

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || []);
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const contextValue = {
    watchlist,
    addWatchlist,
    removeWatchlist,
    checkWatchlist,
  };

  return (
    <WatchlistContext.Provider value={contextValue}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlistContext = () => {
  return useContext(WatchlistContext);
};

export default WatchlistContextProvider;
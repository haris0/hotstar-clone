'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./navbar.module.css";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <aside>
      <div className={styles.logo_container}>
        <Image alt='home' src='/icons/logo.png' width="48" height="48" className={styles.icon}/>
      </div>
      <nav className={styles.nav_container}>
        <Link href='/search'>
          <div className={styles.icon_container}>
            <Image 
              alt='home' 
              src='/icons/search.png' 
              width="18" 
              height="18" 
              className={`${styles.icon} ${pathname === '/search' ? styles.icon_active : ''}`}
            />
          </div>
        </Link>
        <Link href='/'>
          <div className={styles.icon_container}>
            <Image 
              alt='home' 
              src='/icons/home.png' 
              width="18" 
              height="18"
              className={`${styles.icon} ${pathname === '/' ? styles.icon_active : ''}`}
            />
          </div>
        </Link>
        <Link href='/watchlist'>
          <div className={styles.icon_container}>
            <Image 
              alt='home' 
              src='/icons/bookmark.png' 
              width="18" 
              height="18"
              className={`${styles.icon} ${pathname === '/watchlist' ? styles.icon_active : ''}`}
            />
          </div>
        </Link>
      </nav>
    </aside>
  );
};

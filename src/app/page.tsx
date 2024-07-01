import styles from "./page.module.css";

import Banner from "@/components/banner";
import ContentCard from "@/components/content-card";

import { getTopRated } from "@/repositories/getTopRates";
import { getTrandingMovie } from "@/repositories/getTrendingMovie";
import { getTrandingTv } from "@/repositories/getTrendingTv";
import { getFullPosterUrl } from "@/repositories/constants";
import { useState } from "react";
import AccordionContent from "@/components/accordion-content";

export default async function Home() {
  const topRates = await getTopRated();
  const trandingMovies = await getTrandingMovie();
  const trandingTvs = await getTrandingTv();

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner movies={trandingMovies?.results}/>
      </div>
      <div className={styles.list}>
        <h3 className={styles.section_title}>
          Top Rated Movies & TV Series
        </h3>
        <AccordionContent contents={topRates.results} />
        
        <h3 className={styles.section_title}>Top Rated Movie of the week</h3>
        <div className={styles.scroll_view}>
          {trandingMovies?.results?.map((movie) => (
            <ContentCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              imageUrl={getFullPosterUrl(movie.poster_path)}
            />
          ))}
        </div>
        <h3 className={styles.section_title}>Top Rated TV Series of the week</h3>
        <div className={styles.scroll_view}>
          {trandingTvs?.results?.map((tv) => (
            <ContentCard
              key={tv.id}
              title={tv.name}
              overview={tv.overview}
              imageUrl={getFullPosterUrl(tv.poster_path)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

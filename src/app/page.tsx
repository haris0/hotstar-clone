import styles from "./page.module.css";

import Banner from "@/components/banner";
import AccordionContent from "@/components/accordion-content";

import { getTopRated } from "@/repositories/getTopRates";
import { getTrandingMovie } from "@/repositories/getTrendingMovie";
import { getTrandingTv } from "@/repositories/getTrendingTv";
import { getFullPosterUrl } from "@/repositories/constants";

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
        <AccordionContent 
          contents={
            topRates.results.map(top => ({
              id: top.id,
              title: top.title,
              overview: top.overview,
              imageUrl: getFullPosterUrl(top.poster_path),
              mediaType: top.media_type,
            }))
          }
          initShow={15}
        />
        
        <h3 className={styles.section_title}>Top Rated Movie of the week</h3>
        <AccordionContent 
          contents={
            trandingMovies.results.map(movie => ({
              id: movie.id,
              title: movie.title,
              overview: movie.overview,
              imageUrl: getFullPosterUrl(movie.poster_path),
              mediaType: movie.media_type,
            }))
          } 
          initShow={7}
        />
        <h3 className={styles.section_title}>Top Rated TV Series of the week</h3>
        <AccordionContent 
          contents={
            trandingTvs.results.map(tv => ({
              id: tv.id,
              title: tv.name,
              overview: tv.overview,
              imageUrl: getFullPosterUrl(tv.poster_path),
              mediaType: tv.media_type,
            }))
          } 
          initShow={7}
        />
      </div>
    </main>
  );
}

import Banner from "@/components/banner";
import styles from "./page.module.css";
import { getTopRated } from "@/repositories/getTopRates";
import { getTrandingMovie } from "@/repositories/getTrendingMovie";
import { getTrandingTv } from "@/repositories/getTrendingTv";

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
        <h3>Top Rated Movies & TV Series {topRates?.results?.length}</h3>
        {topRates?.results?.map((movie) => (
          <span key={movie.id}>{movie.media_type} {movie.title}</span>
        ))}
        <h3>Top Rated Movie of the week {trandingMovies?.results?.length}</h3>
        {trandingMovies?.results?.map((movie) => (
          <span key={movie.id}>{movie.title}</span>
        ))}
        <h3>Top Rated TV Series of the week {trandingTvs?.results?.length}</h3>
        {trandingTvs?.results?.map((tv) => (
          <span key={tv.id}>{tv.name}</span>
        ))}
        <h3>Top Rated Movie of the week {trandingMovies?.results?.length}</h3>
        {trandingMovies?.results?.map((movie) => (
          <span key={movie.id}>{movie.title}</span>
        ))}
        <h3>Top Rated TV Series of the week {trandingTvs?.results?.length}</h3>
        {trandingTvs?.results?.map((tv) => (
          <span key={tv.id}>{tv.name}</span>
        ))}
      </div>
    </main>
  );
}

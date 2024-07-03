import { getMovieDetail } from "@/repositories/getMovieDetail";
import styles from "./page.module.css";

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const { movieId } = params;
  const detail = await getMovieDetail(movieId);

  return (
    <main>
      <div className={styles.banner}>
        Banner
      </div>
      <div className={styles.content}>
        Content
        {JSON.stringify(detail)}
      </div>
    </main>
  );
};

export default MovieDetail;
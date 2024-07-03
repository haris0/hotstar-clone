import { getTvDetail } from "@/repositories/getTvDetail";
import styles from "./page.module.css";

const TvDetail = async ({ params }: { params: { tvId: string } }) => {
  const { tvId } = params;
  const detail = await getTvDetail(tvId);

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

export default TvDetail;
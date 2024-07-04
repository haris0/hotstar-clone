import { getTvDetail } from "@/repositories/getTvDetail";
import styles from "./page.module.css";
import { getFullBgUrl, getFullPosterUrl } from "@/repositories/constants";
import { convertDate } from "@/helpers/convertDate";
import WatchlistButton from "@/components/watchlist-button";
import AccordionContent from "@/components/accordion-content";
import SeasonsTabs from "@/components/seasons-tab";
import { Metadata } from "next";

interface TvDetailProps { 
  params: { 
    tvId: string 
  }
}

export async function generateMetadata(
  { params }: TvDetailProps
): Promise<Metadata> {
  const { tvId } = params;
  const detail = await getTvDetail(tvId);

  const title = `${detail.name} - Hotstar123`;
  const imageFull = getFullPosterUrl(detail.poster_path);
 
  return {
    title,
    description: detail.overview,
    openGraph: {
      title,
      type: 'website',
      description: detail.overview,
      images: imageFull,
    },
    twitter: {
      title,
      card: 'summary_large_image',
      description: detail.overview,
      images: imageFull,
    }
  }
}

const TvDetail = async ({ params }: TvDetailProps) => {
  const { tvId } = params;
  const detail = await getTvDetail(tvId);

  const bannerFull = getFullBgUrl(detail.backdrop_path);

  return (
    <main>
      <div className={styles.banner_container}>
        <div
          className={styles.banner}
          style={{
            backgroundImage: ` 
              linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url(${bannerFull})
            `,
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.header_container}>
            <div>
              <h1>{detail.name}</h1>
              <div>
                <span>
                  {convertDate(detail.first_air_date)} ({
                    detail.production_companies[detail.production_companies.length - 1]?.origin_country
                  })
                </span>
                <span className={styles.subtitle_separator}>•</span>
                {detail.genres.map((genre, idx) => (
                  <span key={genre.id}>
                    {genre.name}
                    {detail.genres.length !== (idx + 1) && (
                      <span>,{' '}</span>
                    )}
                  </span>
                ))}
                <span className={styles.subtitle_separator}>•</span>
                <span>{detail.seasons.length} Seasons</span>
              </div>
            </div>
            <div>
              <WatchlistButton 
                content={{ 
                  id: detail.id,
                  title: detail.name,
                  overview: detail.overview,
                  imageUrl: getFullPosterUrl(detail.poster_path),
                  mediaType: 'tv'
                }} 
              />
            </div>
          </div>
          {detail.keywords && detail.keywords.length && (
            <>
              <h4 className={styles.section_title}>Keyword</h4>
              <div className={styles.keyword_container}>
                {detail.keywords.map((keyword) => (
                  <span key={keyword.id} className={styles.tag}>{keyword.name}</span>
                ))}
              </div>
            </>
          )}
          <h3 className={styles.section_title}>Overview</h3>
          <div className={styles.tagline}>{detail.tagline}</div>
          <p>{detail.overview}</p>
        </div>
        {detail.seasons && detail.seasons.length > 0 && (
          <div className={styles.seasons}>
            <h3 className={styles.section_title}>Seasons</h3>
            <br />
            <SeasonsTabs tvId={tvId} seasons={detail.seasons} />
          </div>
        )}
        {detail.recommendations && detail.recommendations.length > 0 && (
          <div className={styles.recomm}>
            <h3 className={styles.section_title}>Recommendation</h3>
            <br />
            <AccordionContent 
              contents={
                detail.recommendations?.map(tv => ({
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
        )}
      </div>
    </main>
  );
};

export default TvDetail;
import styles from "./page.module.css";

import { Metadata } from "next";
import { getMovieDetail } from "@/repositories/getMovieDetail";
import { getFullBgUrl, getFullPosterUrl } from "@/repositories/constants";
import { convertDate } from "@/helpers/convertDate";
import { convertMinsToHrsMins } from "@/helpers/convertMinsToHrsMins";
import AccordionContent from "@/components/accordion-content";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import WatchlistButton from "@/components/watchlist-button";

interface MovieDetailProps { 
  params: { 
    movieId: string 
  }
}
 
export async function generateMetadata(
  { params }: MovieDetailProps
): Promise<Metadata> {
  const { movieId } = params;
  const detail = await getMovieDetail(movieId);

  const title = `${detail.title} - Hotstar123`;
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

const MovieDetail = async ({ params }: MovieDetailProps) => {
  const { movieId } = params;
  const detail = await getMovieDetail(movieId);
  
  const bannerFull = getFullBgUrl(detail.backdrop_path);
  const officialTrailer = detail?.videos?.find(
    (video) => video?.name.includes('Official Trailer')
            || video?.name.includes('Official Teaser')
            || (video.official && video.type === 'Trailer'),
  );

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
              <h1>{detail.title}</h1>
              <div>
                <span>
                  {convertDate(detail.release_date)} ({
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
                <span>{convertMinsToHrsMins(detail.runtime)}</span>
              </div>
            </div>
            <div>
              <WatchlistButton 
                content={{ 
                  id: detail.id,
                  title: detail.title,
                  overview: detail.overview,
                  imageUrl: getFullPosterUrl(detail.poster_path),
                  mediaType: 'movie'
                }} 
              />
            </div>
          </div>
          {detail.keywords && detail.keywords.length > 0 && (
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
        {officialTrailer?.key && (
          <div>
            <h3 className={styles.section_title}>Trailer</h3>
            <br />
            <div className={styles.trailer_container}>
              <YoutubeEmbed embedid={officialTrailer.key || ''} />
            </div>
          </div>
        )}
        {detail.recommendations && detail.recommendations.length > 0 && (
          <div className={styles.recomm}>
            <h3 className={styles.section_title}>Recommendation</h3>
            <br />
            <AccordionContent 
              contents={
                detail.recommendations?.map(movie => ({
                  id: movie.id,
                  title: movie.title,
                  overview: movie.overview,
                  imageUrl: getFullPosterUrl(movie.poster_path),
                  mediaType: movie.media_type,
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

export default MovieDetail;
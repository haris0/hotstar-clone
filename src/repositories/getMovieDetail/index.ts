import { baseURL, fetchOptions } from "../constants";
import { MovieDetail } from "./type";


export async function getMovieDetail(id: string): Promise<MovieDetail> {
  // @note: using Promise all to do paralel fetching
  const allRes = await Promise.all([
    fetch(`${baseURL}/movie/${id}`, fetchOptions),
    fetch(`${baseURL}/movie/${id}/keywords`, fetchOptions),
    fetch(`${baseURL}/movie/${id}/external_ids`, fetchOptions),
    fetch(`${baseURL}/movie/${id}/videos`, fetchOptions),
    fetch(`${baseURL}/movie/${id}/recommendations`, fetchOptions),
  ])

  if (allRes.some((res) => !res.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [
    resDetail,
    resKeyWords,
    resSosmed,
    resVideos,
    resRecomm,
  ] = allRes;

  const detailJson = await resDetail.json();
  const keyWordsJson = await resKeyWords.json();
  const sosmedJson = await resSosmed.json();
  const videosJson = await resVideos.json();
  const recommJson = await resRecomm.json();

  const detailRes = detailJson || {};
  detailRes.keywords = keyWordsJson?.keywords || [];
  detailRes.sosial_media = sosmedJson || {};
  detailRes.videos = videosJson?.results || [];
  detailRes.recommendations = recommJson?.results || [];
 
  return detailRes;
}
import { baseURL, fetchOptions } from "../constants";
import { TvDetail } from "./type";


export async function getTvDetail(id: string): Promise<TvDetail> {
  // @note: using Promise all to do paralel fetching
  const allRes = await Promise.all([
    fetch(`${baseURL}/tv/${id}`, fetchOptions),
    fetch(`${baseURL}/tv/${id}/keywords`, fetchOptions),
    fetch(`${baseURL}/tv/${id}/external_ids`, fetchOptions),
    fetch(`${baseURL}/tv/${id}/videos`, fetchOptions),
    fetch(`${baseURL}/tv/${id}/recommendations`, fetchOptions),
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
  detailRes.keywords = keyWordsJson?.results || [];
  detailRes.sosial_media = sosmedJson || {};
  detailRes.videos = videosJson?.results || [];
  detailRes.recommendations = recommJson?.results || [];
 
  return detailRes;
}
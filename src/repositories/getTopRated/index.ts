import { baseURL, fetchOptions } from "../constants";
import { TopRatesRes } from "./type";
import { Movie } from "@/models/movie";
import { Tv } from "@/models/tv";

export async function getTopRated(): Promise<TopRatesRes> {
  const urlMovie = `${baseURL}/movie/top_rated?language=en-US&page=1`;
  const urlTv = `${baseURL}/tv/top_rated?language=en-US&page=1`;
  // @note: using Promise all to do paralel fetching
  const [resMovie, resTv] = await Promise.all([
    fetch(urlMovie, fetchOptions),
    fetch(urlTv, fetchOptions),
  ]) 

  if (!resMovie.ok || !resTv.ok) {
    throw new Error('Failed to fetch data')
  }

  const movieJson = await resMovie.json();
  const tvJson = await resTv.json();
 
  return {
    page: movieJson.page,
    results: [
      ...movieJson.results.map((movie: Movie) => ({...movie, media_type: 'movie'})),
      ...tvJson.results.map((tv: Tv) => ({...tv, title: tv.name, media_type: 'tv'}))
    ]
  };
}
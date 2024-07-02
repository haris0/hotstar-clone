import { Movie } from "@/models/movie";
import { Tv } from "@/models/tv";

import { baseURL, fetchOptions } from "../constants";


export interface SearchResult { 
  movies: Movie[],
  tvs: Tv[]
}

export const getSearchResult = async (query: string, page: number = 1): Promise<SearchResult> => {
  const urlSearchMovie = `${baseURL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const urlSearchTv = `${baseURL}/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`;
  // @note: using Promise all to do paralel fetching
  const [resMovie, resTv] = await Promise.all([
    fetch(urlSearchMovie, fetchOptions),
    fetch(urlSearchTv, fetchOptions),
  ]) 

  if (!resMovie.ok || !resTv.ok) {
    throw new Error('Failed to fetch data')
  }

  const movieJson = await resMovie.json();
  const tvJson = await resTv.json();

  return {
    movies: movieJson.results,
    tvs: tvJson.results
  };
};
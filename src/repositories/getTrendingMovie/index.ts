import { baseURL, fetchOptions } from "../constants";
import { TrendingMovie } from "./type";

export async function getTrendingMovie(): Promise<TrendingMovie> {
  const urlMovie = `${baseURL}/trending/movie/week?language=en-US`;
  const res = await fetch(urlMovie, fetchOptions)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
 
  return res.json();
}
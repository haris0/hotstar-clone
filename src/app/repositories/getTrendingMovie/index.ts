import { baseURL, headers } from "../constants";
import { TrendingMovie } from "./type";

export async function getTrandingMovie(): Promise<TrendingMovie> {
  const urlMovie = `${baseURL}/trending/movie/week?language=en-US`;
  const res = await fetch(urlMovie, { headers })
 
  return res.json();
}
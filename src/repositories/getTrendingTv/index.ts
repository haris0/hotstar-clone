import { baseURL, fetchOptions } from "../constants";
import { TrendingTv } from "./type";

export async function getTrendingTv(): Promise<TrendingTv> {
  const urlTv = `${baseURL}/trending/tv/week?language=en-US`;
  const res = await fetch(urlTv, fetchOptions)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
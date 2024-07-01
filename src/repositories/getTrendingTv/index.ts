import { baseURL, headers } from "../constants";
import { TrendingTv } from "./type";

export async function getTrandingTv(): Promise<TrendingTv> {
  const urlTv = `${baseURL}/trending/tv/week?language=en-US`;
  const res = await fetch(urlTv, { headers })
 
  return res.json();
}
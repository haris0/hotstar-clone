import { baseURL, fetchOptions } from "../constants";
import { TvSeason } from "./type";

export async function getTvSeason(seriesId: string, seasonNumber: string): Promise<TvSeason> {
  const urlTvSeason = `${baseURL}/tv/${seriesId}/season/${seasonNumber}`;
  const res = await fetch(urlTvSeason, fetchOptions)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
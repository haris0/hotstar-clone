import { useEffect, useState } from "react";
import { TvSeason } from "./type";
import { getTvSeason } from ".";

export const useTvSeason = (prams: {tvId: string, seasonNumber: string}) => {
  const [data, setData] = useState<TvSeason>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const season = await getTvSeason(prams.tvId, prams.seasonNumber);
        setData(season);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [prams.tvId, prams.seasonNumber]);

  return { data, isLoading, error }
}
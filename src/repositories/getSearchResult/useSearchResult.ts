import { useState } from "react";
import { getSearchResult, SearchResult } from ".";

export const useSearchResult = () => {
  const [data, setData] = useState<SearchResult>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const search = async (query: string) => {
    setIsLoading(true);
    try {
      const data = await getSearchResult(query);
      setData(data);
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  }

  const resetData = () => {
    setData(undefined);
  }

  return {data, resetData, search, isLoading, error}
}
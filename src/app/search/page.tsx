'use client'

import { ChangeEvent, useEffect, useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import styles from "./page.module.css";
import { useSearchResult } from "@/repositories/getSearchResult/useSearchResult";
import AccordionContent from "@/components/accordion-content";
import { getFullPosterUrl } from "@/repositories/constants";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const query = searchParams.get('query');
  const [keyword, setKeyword] = useState(query || '');
  const { search, data, resetData, isLoading } = useSearchResult();

  // @note: using debounce to optimized fetching on search 
  const handleSearch = useDebounce((key: string) => {
    const params = new URLSearchParams(searchParams);
    if (key) params.set('query', key) 
    else {
      params.delete('query');
      resetData();
    };
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
    handleSearch(value);
  }

  useEffect(() => {
    if(query) {
      search(query)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  
  return (
    <main className={styles.main}>
      <input 
        type="text"
        placeholder="Search for a movie or tv show"
        value={keyword}
        onChange={handleOnChange}
        className={styles.search_input}
      />
      <div className={styles.placehold}>
        {!data && isLoading && 'Searching...'}
        {!data && !isLoading && 'Search result will goes here'}
        {data?.movies 
          && data.movies.length < 1 
          && data?.tvs 
          && data.tvs.length < 1 && 
          !isLoading && 'Result not found'}
      </div>
      {data?.movies && data.movies.length > 0 && (
        <>
          <h3 className={styles.section_title}>Movie Results:</h3>
          <AccordionContent 
            contents={
              data.movies.map(movie => ({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                imageUrl: getFullPosterUrl(movie.poster_path),
                mediaType: movie.media_type,
              }))
            } 
            initShow={15}
          />
        </>
      )}
      {data?.tvs && data.tvs.length > 0 && (
        <>
          <h3 className={styles.section_title}>Tv Results:</h3>
          <AccordionContent 
            contents={
              data.tvs.map(tv => ({
                id: tv.id,
                title: tv.name,
                overview: tv.overview,
                imageUrl: getFullPosterUrl(tv.poster_path),
                mediaType: tv.media_type,
              }))
            } 
            initShow={15}
          />
        </>
      )}
    </main>
  );
};

const SearchPage = () => {
  return (
    <Suspense>
      <Search />
    </Suspense>
  )
}

export default SearchPage;
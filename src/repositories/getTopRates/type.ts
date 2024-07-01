import { Movie } from "@/models/movie";

interface TopRate extends Movie {
  media_type: 'movie' | 'tv';
}

export interface TopRatesRes {
  page: number;
  results: TopRate[];
}
import { Movie } from "@/app/models/movie";

export interface TrendingMovie {
  page: number;
  results: Movie[];
}
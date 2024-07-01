import { Movie } from "@/models/movie";

export interface TrendingMovie {
  page: number;
  results: Movie[];
}
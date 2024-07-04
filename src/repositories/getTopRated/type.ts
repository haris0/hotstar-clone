import { Movie } from "@/models/movie";

export interface TopRatesRes {
  page: number;
  results: Movie[];
}
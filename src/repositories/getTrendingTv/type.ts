import { Tv } from "@/models/tv";

export interface TrendingTv {
  page: number;
  results: Tv[];
}
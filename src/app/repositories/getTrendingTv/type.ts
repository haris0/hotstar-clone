import { Tv } from "@/app/models/tv";

export interface TrendingTv {
  page: number;
  results: Tv[];
}
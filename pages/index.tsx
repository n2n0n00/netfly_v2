/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { fetchMovieByID, fetchSimilarMovieByID } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function fetchData() {
  const searchParams = usePathname();
  const search = searchParams;
  const parts = search.split("/");
  const movieId = { id: parseInt(parts[parts.length - 1]) };

  return movieId;
}

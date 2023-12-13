import page from "@/app/(root)/(home)/page";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const tmdbApiKey = process.env.TMDB_KEY;

export interface MovieProps {
  country?: string | null;
  query?: string | null;
  imageURL?: string | null;
  id?: string;
  title?: string;
  year?: string;
  vote_avg?: number;
  description?: string;
  page?: string | number | null;
}

export async function fetchPopularFilm() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmY5ZTQ1NzA4ODZlMzRmMTQ4N2ViOTcxNTRiYTVhMyIsInN1YiI6IjY1NmY4ZDg5NDZlNzVmMDBlM2QzMWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3uAYVZT10bqG-bT1l3CEWfuRM0KZWKcfPGdyMQ9_xk",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${tmdbApiKey}`,
      options
    );

    const data = await response.json();

    const result = data.results[3];

    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function getGenreList() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmY5ZTQ1NzA4ODZlMzRmMTQ4N2ViOTcxNTRiYTVhMyIsInN1YiI6IjY1NmY4ZDg5NDZlNzVmMDBlM2QzMWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3uAYVZT10bqG-bT1l3CEWfuRM0KZWKcfPGdyMQ9_xk",
      },
    };

    const response = fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${tmdbApiKey}`,
      options
    );

    const data = (await response).json();

    const result = data;

    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenreData {
  genres: Genre[];
}

export function getGenreNames(
  genreData: GenreData,
  genreIds: number[]
): string[] {
  // Create a map for quick genre lookup by ID
  const genreMap = new Map(
    genreData.genres.map((genre) => [genre.id, genre.name])
  );

  // Filter the genre IDs and map them to genre names
  const genreNames = genreIds
    .map((id) => genreMap.get(id))
    .filter((name) => name !== undefined) as string[];

  return genreNames;
}

export async function fetchNewRelease() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDiscoverMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDiscoverTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTopRatedTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchNowPlayingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchOnAirTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTrendingMovie() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results[0];
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTrendingTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results[0];
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByID() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/466420?language=en-US&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data;

    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSimilarMovieByID() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/466420/recommendations?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

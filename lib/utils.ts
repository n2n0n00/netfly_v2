import { IShowCase } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

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
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = [data.results[0]];

    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPopularFilmGenres() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results[0];
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function getGenreList() {
  try {
    const response = fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${tmdbApiKey}`
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
  id?: number;
  name?: string;
}

export interface GenreData {
  genres: Genre[];
}

export const extractGenreNames = (genres?: Genre[]): string => {
  // Check if genres is undefined and provide a default value (empty array)
  const genreNames: string[] =
    genres?.map((genre: Genre) => genre.name || "") || [];

  // Use the join function to concatenate the genre names into a single string
  const result: string = genreNames.join(", ");

  return result;
};

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

// const movieId = 466420;
export interface movieIdProp {
  id: number;
}

export async function fetchMovieByID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSimilarMovieByID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCreditsByMovieID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.cast.slice(0, 5);

    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

// FETCH REQUESTS FOR TV SHOWS DETAIL PAGE

export async function fetchTVShowByID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSimilarTVShowByID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCreditsByTVShowID({ id }: movieIdProp) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.cast.slice(0, 5);
    console.log(result);
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

// FETCHING MOVIES BY GENRE:

export interface genreIdProp {
  id: number;
  name?: {
    title_1?: string;
    title_2?: string;
  }[];
}

export async function fetchMoviesByGenre({ id }: genreIdProp) {
  try {
    // Check if genres is defined before accessing its properties
    if (!id) {
      console.error("Genres is undefined");
      return [];
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmY5ZTQ1NzA4ODZlMzRmMTQ4N2ViOTcxNTRiYTVhMyIsInN1YiI6IjY1NmY4ZDg5NDZlNzVmMDBlM2QzMWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3uAYVZT10bqG-bT1l3CEWfuRM0KZWKcfPGdyMQ9_xk",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
      options
    );

    const data = await response.json();

    const result = data.results;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// FETCHING TV BY GENRE:
export async function fetchTvShowsByGenre({ id }: genreIdProp) {
  try {
    // Check if genres is defined before accessing its properties
    if (!id) {
      console.error("Genres is undefined");
      return [];
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmY5ZTQ1NzA4ODZlMzRmMTQ4N2ViOTcxNTRiYTVhMyIsInN1YiI6IjY1NmY4ZDg5NDZlNzVmMDBlM2QzMWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3uAYVZT10bqG-bT1l3CEWfuRM0KZWKcfPGdyMQ9_xk",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
      options
    );

    const data = await response.json();

    const result = data.results;
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// FETCH QUERY (SEARCHBAR)

export async function fetchSearchBarInput({ searchQuery }: any) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${tmdbApiKey}`
    );

    const data = await response.json();

    const result = data.results;
    return result;

    //
  } catch (error) {
    console.log(error);
  }
}

// YEAR EXTRACTION FUNCTION
export function getYearFromDate(dateString: any): number | null {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error("Invalid date format");
    return null;
  }

  // Extract the year
  const year = date.getFullYear();
  return year;
}

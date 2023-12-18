import { Genre } from "@/lib/utils";

export interface NavLink {
  imgURL?: string;
  route: string;
  label: string;
}

export interface NavColor {
  bgColor?: string;
}

export interface Pages {
  imgURL?: string;
  route: string;
  label: string;
}

export interface Icons {
  imgURL: string;
  label?: number | string;
  alt: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface CItems {
  title: string;
  length: string;
  type: string;
  styles: string;
}

export interface IShowCase {
  category?: string;
  title_1?: string;
  title_2?: string;
  items?: CItem;
  data?: {
    title_1?: string;
    title_2?: string;
  }[];
  carouselItems?: {
    poster_path?: string;
    title?: string;
    name?: string;
    vote_count?: number;
    vote_average?: number;
    id: number;
    genres?: { id?: number; name?: string }[];
  }[];
}

export interface IAPIDataCall {
  carouselItems?: {
    poster_path?: string;
    title?: string;
    name?: string;
    vote_count?: number;
    vote_average?: number;
    overview?: string;
    id?: string;
    genreIds?: string;
    original_language?: string;
    runtime?: number;
    release_date?: string;
  }[];
  genres?: string[];
}

export interface IMovieDetailsPage {
  category?: string;
  carouselItems?: {
    poster_path?: string;
    title?: string;
    name?: string;
    vote_count?: number;
    vote_average?: number;
    overview?: string;
    id?: string;
    genreIds?: string;
    original_language?: string;
    runtime?: number;
    release_date?: string;
    first_air_date: string;
  };
  genres?: string[];
}

export interface IMovieDetailsPageSynopsis {
  category?: string;
  carouselItems?: {
    poster_path?: string;
    title?: string;
    name?: string;
    vote_count?: number;
    vote_average?: number;
    overview?: string;
    id?: string;
    status?: string;
    original_language?: string;
    runtime?: number;
    release_date?: string;
    genres?: Genre[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    first_air_date?: string;
  };
  actors?: {
    name?: string;
    profile_path?: string;
    character?: string;
  }[];
}

export interface FooterLinks {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

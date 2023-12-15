import { Genre } from "@/lib/utils";
import Slider, { Settings } from "@types/react-slick";

declare module "react-slick" {
  export { Slider, Settings };
}

export interface NavLink {
  imgURL?: string;
  route: string;
  label: string;
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
  };
  genres?: string[];
}

export interface IMovieDetailsPageSynopsis {
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
  };
  actors?: {
    name?: string;
    profile_path?: string;
    character?: string;
  }[];
}

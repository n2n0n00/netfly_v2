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
}

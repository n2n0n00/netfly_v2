import { Pages, NavLink, Icons, CItems } from "@/types";
import { calendar, star, clock, subtitles } from "../public/index";

export const NavLinks: NavLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/movies",
    label: "Movies",
  },
  {
    route: "/tvshows",
    label: "TV Shows",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export const pages: Pages[] = [
  {
    route: "/movie_details",
    label: "Movie Details",
  },
  {
    route: "/tvshow_details",
    label: "TV Show Details",
  },
  {
    route: "/episode_details",
    label: "Episode Details",
  },
];

export const icons: Icons[] = [
  {
    imgURL: calendar,
    alt: "calendar",
  },
  {
    imgURL: clock,
    alt: "timer",
  },
  {
    imgURL: star,
    alt: "star",
  },
  {
    imgURL: subtitles,
    alt: "subtitle",
  },
];

export const CarouselItems: CItems[] = [
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
  {
    title: "The Shawshank Redemption",
    type: "Season 1",
    length: "16 Episodes",
    styles: "w-[250px] h-[150px] bg-black",
  },
];

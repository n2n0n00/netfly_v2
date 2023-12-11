import { Pages, NavLink, Icons, CItems, IShowCase } from "@/types";
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

export const showCase: IShowCase[] = [
  {
    title_1: "New Release",
    title_2: "This Week",
  },
  {
    title_1: "Popular",
    title_2: "TV Shows",
  },
  {
    title_1: "Romantic Series for",
    title_2: "Valentine's Day",
  },
  {
    title_1: "Latest",
    title_2: "Movies",
  },
  {
    title_1: "Recommended",
    title_2: "Movies",
  },
  {
    title_1: "Continue",
    title_2: "Watching",
  },
  {
    title_1: "Watch",
    title_2: "Again",
  },
];

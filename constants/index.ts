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

export const showCase1: IShowCase[] = [
  {
    title_1: "Upcoming",
    title_2: "Movies",
  },
];

export const showCase2: IShowCase[] = [
  {
    title_1: "Discover",
    title_2: "Movies",
  },
];
export const showCase3: IShowCase[] = [
  {
    title_1: "Discover",
    title_2: "TV Shows",
  },
];
export const showCase4: IShowCase[] = [
  {
    title_1: "Top Rated",
    title_2: "TV Shows",
  },
];

export const showCase5: IShowCase[] = [
  {
    title_1: "Now Playing",
    title_2: "Movies",
  },
];
export const showCase6: IShowCase[] = [
  {
    title_1: "Top Rated",
    title_2: "Movies",
  },
];

export const showCase7: IShowCase[] = [
  {
    title_1: "On The",
    title_2: "Air TV",
  },
];

export const topMovies = [
  {
    number: "01",
    ranking: "TOP 1",
    title: "The Shawshank Redemption",
  },
  {
    number: "02",
    ranking: "TOP 2",
    title: "The Shawshank Redemption",
  },
  {
    number: "03",
    ranking: "TOP 3",
    title: "The Shawshank Redemption",
  },
  {
    number: "04",
    ranking: "TOP 4",
    title: "The Shawshank Redemption",
  },
  {
    number: "05",
    ranking: "TOP 5",
    title: "The Shawshank Redemption",
  },
  {
    number: "06",
    ranking: "TOP 6",
    title: "The Shawshank Redemption",
  },
];

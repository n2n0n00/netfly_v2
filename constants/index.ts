import { Pages, NavLink, Icons, CItems, IShowCase, FooterLinks } from "@/types";
import {
  calendar,
  subtitles,
  star,
  clock,
  mail,
  location,
  phone,
  footermail,
  footerphone,
  footerlocation,
} from "../public/index";
import { genreIdProp } from "@/lib/utils";

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

export const showCase8: IShowCase[] = [
  {
    title_1: "Similar",
    title_2: "Movies",
  },
];

export const showCase9: IShowCase[] = [
  {
    title_1: "Similar",
    title_2: "TV Shows",
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

export const detailsData = [
  {
    label: "Genre",
    value: "Drama, Crime",
  },
  {
    label: "Rating",
    value: "4.8/5",
  },
  {
    label: "Maturity Rating",
    value: "PG-13",
  },
  {
    label: "Duration",
    value: "2h 28m",
  },
  {
    label: "Year",
    value: "2021",
  },
];

export const genresLibrary: genreIdProp[] = [
  { id: 28, name: [{ title_1: "Action", title_2: "" }] },
  { id: 12, name: [{ title_1: "Adventure", title_2: "" }] },
  { id: 16, name: [{ title_1: "Animation", title_2: "" }] },
  { id: 35, name: [{ title_1: "Comedy", title_2: "" }] },
  { id: 80, name: [{ title_1: "Crime", title_2: "" }] },
  { id: 99, name: [{ title_1: "Documentary", title_2: "" }] },
  { id: 18, name: [{ title_1: "Drama", title_2: "" }] },
  { id: 10751, name: [{ title_1: "Family", title_2: "" }] },
  { id: 14, name: [{ title_1: "Fantasy", title_2: "" }] },
  { id: 36, name: [{ title_1: "History", title_2: "" }] },
  { id: 27, name: [{ title_1: "Horror", title_2: "" }] },
  { id: 10402, name: [{ title_1: "Music", title_2: "" }] },
  { id: 9648, name: [{ title_1: "Mystery", title_2: "" }] },
  { id: 10749, name: [{ title_1: "Romance", title_2: "" }] },
  { id: 878, name: [{ title_1: "Science ", title_2: "Fiction" }] },
  { id: 10770, name: [{ title_1: "TV ", title_2: "Movie" }] },
  { id: 53, name: [{ title_1: "Thriller", title_2: "" }] },
  { id: 10752, name: [{ title_1: "War", title_2: "" }] },
  { id: 37, name: [{ title_1: "Western", title_2: "" }] },
];

export const genresTvLibrary: genreIdProp[] = [
  {
    id: 10759,
    name: [{ title_1: "Action &", title_2: "Adventure" }],
  },
  {
    id: 16,
    name: [{ title_1: "Animation", title_2: "" }],
  },
  {
    id: 35,
    name: [{ title_1: "Comedy", title_2: "" }],
  },
  {
    id: 80,
    name: [{ title_1: "Crime", title_2: "" }],
  },
  {
    id: 99,
    name: [{ title_1: "Documentary", title_2: "" }],
  },
  {
    id: 18,
    name: [{ title_1: "Drama", title_2: "" }],
  },
  {
    id: 10751,
    name: [{ title_1: "Family", title_2: "" }],
  },
  {
    id: 10762,
    name: [{ title_1: "Kids", title_2: "" }],
  },
  {
    id: 9648,
    name: [{ title_1: "Mystery", title_2: "" }],
  },
  {
    id: 10763,
    name: [{ title_1: "News", title_2: "" }],
  },
  {
    id: 10764,
    name: [{ title_1: "Reality", title_2: "" }],
  },
  {
    id: 10765,
    name: [{ title_1: "Sci-Fi &", title_2: "Fantasy" }],
  },
  {
    id: 10766,
    name: [{ title_1: "Soap", title_2: "" }],
  },
  {
    id: 10767,
    name: [{ title_1: "Talk", title_2: "" }],
  },
  {
    id: 10768,
    name: [{ title_1: "War &", title_2: "Politics" }],
  },
  {
    id: 37,
    name: [{ title_1: "Western", title_2: "" }],
  },
];

export const contactDetails = [
  {
    img: mail,
    title: "Email",
    subtitle: "support@netfly.com",
  },
  {
    img: phone,
    title: "Phone",
    subtitle: "000-000-0000",
  },
  {
    img: location,
    title: "Headquarters",
    subtitle: "120 La la land, Los Gatos, United Lands",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    title: "Quick Links",
    links: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Movies",
        url: "movies",
      },
      {
        title: "TV Shows",
        url: "tvshows",
      },
      {
        title: "Contact",
        url: "contact",
      },
    ],
  },
  {
    category: "social",
    title: "Social Media",
    links: [
      {
        title: "Instagram",
        url: "https://www.instagram.com",
      },
      {
        title: "X",
        url: "https://www.x.com",
      },
      {
        title: "Meta",
        url: "https://www.meta.com",
      },
      {
        title: "Youtube",
        url: "https://www.youtube.com",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com",
      },
    ],
  },
  {
    title: "Policy Links",
    links: [
      {
        title: "Privacy Links",
        url: "privacypolicy",
      },
      {
        title: "Cookie Policy",
        url: "cookiepolicy",
      },
      {
        title: "Terms & Conditions",
        url: "termsandconditions",
      },
    ],
  },
];

export const footerContacts = [
  {
    img: footermail,
    title: "support@netfly.com",
  },
  {
    img: footerphone,
    title: "000-000-0000",
  },
  {
    img: footerlocation,
    title: "120 La la land, Los Gatos, United Lands",
  },
];

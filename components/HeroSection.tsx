import {
  GenreData,
  fetchPopularFilm,
  getGenreList,
  getGenreNames,
} from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { calendar, subtitles, star } from "../public/index";
import Navbar from "@/components/navigation/Navbar";

export const MovieMetrics = ({ prop, img }: any) => (
  <div className="flex-center flex-row gap-2">
    <Image src={img} alt="calendar" width={15} height={15} />
    <p className="p2 text-white uppercase">{prop ? prop : "Not Disclosed"}</p>
  </div>
);

const HeroSection = async () => {
  const popularMovies = await fetchPopularFilm();
  const genresList: GenreData = await getGenreList();
  const movieGenres: number[] = popularMovies.genre_ids;

  const poster = popularMovies.poster_path;

  const genres: string[] = getGenreNames(genresList, movieGenres);

  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="gradient_bg gap-10 flex flex-col mb-[5%]">
        <Navbar />
        <div className="">
          <div className="flex-start flex-col">
            <div className="flex-start gap-5 m-3 md:mx-20">
              <MovieMetrics img={calendar} prop={popularMovies.release_date} />
              <MovieMetrics
                img={subtitles}
                prop={popularMovies.original_language}
              />
              <MovieMetrics img={star} prop={popularMovies.vote_average} />
            </div>

            {/* title of the movie will go here */}
            <div className="m-3 flex-start md:mx-20">
              <h2 className="h2 text-white font-redHatDisplay">
                {popularMovies.title}
              </h2>
            </div>

            {/* genres of the movie will go here */}
            <div className="flex-start flex-row gap-5 m-3 md:mx-20">
              {genres.map((item) => (
                <div className="white_btn" key={item}>
                  <p className="red_text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* description of the movie will go here */}
          <div className="flex-start flex-col gap-5 m-3 md:mx-20 lg:w-[50%]">
            <p className="text-white p1 max-md:p2 text-justify font-inter">
              {popularMovies.overview}
            </p>
            <div className="red_btn mb-20">
              <p className="p2 text-white">Stream Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

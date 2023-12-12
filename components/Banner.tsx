import { calendar, subtitles, star } from "@/public";
import React from "react";
import { MovieMetrics } from "./HeroSection";
import {
  GenreData,
  fetchPopularFilm,
  getGenreList,
  getGenreNames,
} from "@/lib/utils";

const Banner = async ({ stylesOuter, stylesInner }: any) => {
  const popularMovies = await fetchPopularFilm();
  const genresList: GenreData = await getGenreList();
  const movieGenres: number[] = popularMovies.genre_ids;

  const poster = popularMovies.poster_path;

  const genres: string[] = getGenreNames(genresList, movieGenres);
  return (
    <section className="flex-center flex-col w-full h-[80vh] my-12">
      <div
        className="w-[90%] relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          borderRadius: "50px",
        }}
      >
        <div
          className={`gradient_bg_rounded justify-center gap-10 max-sm:gap-2 flex flex-col  ${stylesOuter}`}
        >
          <div
            className={`flex-start flex-col md:mt-20 max-sm:mt-[20%] ${stylesInner}`}
          >
            <div className="flex-start gap-5 m-3 md:mx-20">
              <MovieMetrics img={calendar} prop={popularMovies.release_date} />
              <MovieMetrics
                img={subtitles}
                prop={popularMovies.original_language}
              />
              <MovieMetrics img={star} prop={popularMovies.vote_average} />
            </div>

            {/* title of the movie will go here */}
            <div className="m-3 max-sm:mt-0 flex-start md:mx-20">
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
            <p className="text-white p2 max-xs:p3 text-justify font-inter">
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

export default Banner;

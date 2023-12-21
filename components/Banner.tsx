import { calendar, subtitles, star } from "@/public";
import React from "react";
import { MovieMetrics } from "./HeroSection";
import {
  GenreData,
  fetchTrendingMovie,
  fetchTrendingTV,
  getGenreList,
  getGenreNames,
  getYearFromDate,
} from "@/lib/utils";
import Link from "next/link";

const Banner = async ({ stylesOuter, stylesInner, category }: any) => {
  // fetching trending movie
  const trendingMovie = await fetchTrendingMovie();
  const genresList: GenreData = await getGenreList();
  const movieGenres: number[] = trendingMovie.genre_ids;

  const posterMovie = trendingMovie.poster_path;

  const genresMovie: string[] = getGenreNames(genresList, movieGenres);

  // fetching trending tv show
  const trendingTV = await fetchTrendingTV();

  const tvGenres: number[] = trendingTV.genre_ids;

  const posterTV = trendingTV.poster_path;

  const genresTV: string[] = getGenreNames(genresList, tvGenres);

  return (
    <Link
      href={`${
        category === "tv"
          ? `tvshows/${trendingTV.id}`
          : `movies/${trendingMovie.id}`
      }`}
    >
      <section className="flex-center flex-col w-full h-[80vh] my-12">
        <div
          className="w-[90%] relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              category === "tv" ? posterTV : posterMovie
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            borderRadius: "50px",
          }}
        >
          <div
            className={`gradient_bg_rounded justify-center gap-10 max-sm:gap-2 flex flex-col ${stylesOuter}`}
          >
            <div
              className={`flex-start flex-col md:mt-20 max-sm:mt-[20%] ${stylesInner}`}
            >
              <div className="flex-start gap-5 m-3 md:mx-20">
                <MovieMetrics
                  img={calendar}
                  prop={
                    category === "tv"
                      ? getYearFromDate(trendingTV.first_air_date)
                      : getYearFromDate(trendingMovie.release_date)
                  }
                />
                <MovieMetrics
                  img={subtitles}
                  prop={
                    category === "tv"
                      ? trendingTV.original_language
                      : trendingMovie.original_language
                  }
                />
                <MovieMetrics
                  img={star}
                  prop={
                    category === "tv"
                      ? trendingTV.vote_average
                      : trendingMovie.vote_average
                  }
                />
              </div>

              {/* title of the movie will go here */}
              <div className="m-3 max-sm:mt-0 flex-start md:mx-20">
                <h2 className="h2 text-white font-redHatDisplay">
                  {category === "tv" ? trendingTV.name : trendingMovie.title}
                </h2>
              </div>

              {/* genres of the movie will go here */}
              <div className="flex-start flex-row gap-5 m-3 md:mx-20">
                {category === "tv"
                  ? genresTV.map((item) => (
                      <div className="white_btn" key={item}>
                        <p className="red_text">{item}</p>
                      </div>
                    ))
                  : genresMovie.map((item) => (
                      <div className="white_btn" key={item}>
                        <p className="red_text">{item}</p>
                      </div>
                    ))}
              </div>
            </div>

            {/* description of the movie will go here */}
            <div className="flex-start flex-col gap-5 m-3 md:mx-20 lg:w-[50%]">
              <p className="text-white p2 max-xs:p3 text-justify font-inter">
                {category === "tv"
                  ? trendingTV.overview
                  : trendingMovie.overview}
              </p>
              <div className="red_btn mb-20">
                <p className="p2 text-white">Find Out!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Banner;

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import { fetchMovieByID } from "@/lib/utils";
import { calendar, clock, star, subtitles } from "@/public";
import { MovieMetrics } from "./HeroSection";

const DetailsHero = async ({ prop, img }: any) => {
  const movieByID = await fetchMovieByID();
  const poster = movieByID.poster_path;

  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="gradient_bg gap-10 flex flex-col mb-[5%]">
        <Navbar />
        <div className="h-[100vh] flex flex-col justify-end">
          <div className="flex justify-end flex-col">
            <div className="m-3 flex-start md:mx-20">
              <h2 className="h2 text-white font-redHatDisplay">
                {movieByID.title}
              </h2>
            </div>

            <div className="flex-start gap-5 m-3 md:mx-20">
              <MovieMetrics img={calendar} prop={movieByID.release_date} />
              <MovieMetrics
                img={subtitles}
                prop={movieByID.original_language}
              />
              <MovieMetrics img={star} prop={movieByID.vote_average} />
              <MovieMetrics img={clock} prop={movieByID.runtime} />
            </div>
          </div>

          {/* description of the movie will go here */}
          <div className="flex-start flex-col m-3 md:mx-20">
            <div className="red_btn mb-20">
              <p className="p2 text-white">Stream Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;

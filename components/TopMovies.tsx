import { topMovies } from "@/constants";
import React from "react";

const MovieCard = ({ number, ranking, title }: any) => (
  <div className="flex-center flex-col m-3 gap-10 md:flex-row">
    <p className="h1 opacity-50 text-white font-redHatDisplay">{number}</p>
    <div className="flex-center flex-col gap-5">
      <div
        className="w-[200px] h-[180px] bg-black rounded-xl flex-end"
        //   style={{
        //     backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     height: "100%",
        //   }}
      >
        <div className="w-[70px] h-[30px] rounded-xl light_red border_radius flex-center">
          <p className="p2 text-white font-inter">{ranking}</p>
        </div>
      </div>
      <div className="h-full">
        <p className="font-inter h5 text-white text-center">{title}</p>
      </div>
    </div>
  </div>
);

const TopMovies = () => {
  return (
    <div className="w-full flex-center flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 m-5 xl:grid-cols-3">
        {topMovies.map((item) => (
          <MovieCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;

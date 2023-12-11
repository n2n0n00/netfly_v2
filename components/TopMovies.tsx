import React from "react";

const MovieCard = () => (
  <div className="flex-center flex-col m-3 gap-10">
    <p className="h1 opacity-50 text-white font-redHatDisplay">01</p>
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
        <p className="p2 text-white font-inter">TOP 1</p>
      </div>
    </div>
    <div className="h-full">
      <p className="font-inter h5 text-white text-center">
        Some Shit title Here
      </p>
    </div>
  </div>
);

const TopMovies = () => {
  return (
    <div>
      <MovieCard />
    </div>
  );
};

export default TopMovies;

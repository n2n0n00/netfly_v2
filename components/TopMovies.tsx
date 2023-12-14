import { topMovies } from "@/constants";
import { fetchTopRatedMovies } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const MovieCard = ({ number, ranking, title, poster_path }: any) => (
  <div className="flex-center flex-col m-3 gap-10 md:flex-row">
    <p className="h1 opacity-50 text-white font-redHatDisplay">0{number}</p>
    <div className="flex-center flex-col gap-5">
      <div
        className="w-[250px] h-[350px] rounded-xl flex-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[70px] h-[30px] rounded-xl light_red border_radius flex-center">
          <p className="p2 text-white font-inter">TOP {ranking}</p>
        </div>
      </div>
      <div className="h-full">
        <p className="font-inter h5 text-white text-center">{title}</p>
      </div>
    </div>
  </div>
);

const TopMovies = async () => {
  const topRatedMovies = await fetchTopRatedMovies();
  // choosing only the top six movies
  const firstSixMovies = topRatedMovies.slice(0, 6);

  return (
    <div className="w-full flex-center flex-col">
      <h3 className="h3 font-redHatDisplay text-white mb-20">Top Six Movies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 m-5 xl:grid-cols-3">
        {firstSixMovies.map((item: any, index: any) => (
          <Link key={item.title} href={`movies/${item.id}`}>
            <MovieCard
              number={index + 1}
              ranking={index + 1}
              title={item.title}
              poster_path={item.poster_path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;

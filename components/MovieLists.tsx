"use client";
import { genresLibrary } from "@/constants";
import useMoviesData from "@/lib/functions";
import React from "react";
import Showcase from "./Showcase";

const MovieLists = () => {
  const allFetchedData = useMoviesData();

  return (
    <div>
      {genresLibrary.map((item, index) => (
        <Showcase
          key={item.id}
          data={item.name}
          carouselItems={allFetchedData[index]}
        />
      ))}
    </div>
  );
};

export default MovieLists;

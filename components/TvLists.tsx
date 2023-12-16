"use client";
import { genresTvLibrary } from "@/constants";
import React from "react";
import Showcase from "./Showcase";
import useTvShowsData from "@/lib/tvFunctions";

const TvLists = () => {
  const allFetchedData = useTvShowsData();

  return (
    <div>
      {genresTvLibrary.map((item, index) => (
        <Showcase
          key={item.id}
          data={item.name}
          category="tv"
          carouselItems={allFetchedData[index]}
        />
      ))}
    </div>
  );
};

export default TvLists;

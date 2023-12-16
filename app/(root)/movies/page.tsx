import React from "react";
import Navbar from "@/components/navigation/Navbar";
import MovieLists from "@/components/MovieLists";

const Movies = () => {
  return (
    <>
      <div>
        <Navbar bgColor="dark" />
        <MovieLists />
      </div>
    </>
  );
};

export default Movies;

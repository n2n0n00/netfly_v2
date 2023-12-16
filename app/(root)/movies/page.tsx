import React from "react";
import Navbar from "@/components/navigation/Navbar";
import MovieLists from "@/components/MovieLists";

const Movies = () => {
  return (
    <>
      <div>
        <div className="bg-white opacity-50">
          <Navbar />
        </div>
        <MovieLists />
      </div>
    </>
  );
};

export default Movies;

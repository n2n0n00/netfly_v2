import React from "react";
import Navbar from "@/components/navigation/Navbar";
import TvLists from "@/components/TvLists";

const TvShows = () => {
  return (
    <>
      <div>
        <Navbar bgColor="dark" />
        <TvLists />
      </div>
    </>
  );
};

export default TvShows;

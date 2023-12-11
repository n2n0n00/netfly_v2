import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";
import TopMovies from "@/components/TopMovies";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div>
        <Showcase />
        <TopMovies />
        <Showcase />
      </div>
    </>
  );
};

export default Home;

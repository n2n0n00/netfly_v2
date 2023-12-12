import Banner from "@/components/Banner";
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
        <Banner stylesOuter={""} stylesInner={""} />
        <TopMovies />
        <Banner stylesOuter={"xl:items-end"} stylesInner={"xl:w-[62%]"} />
      </div>
    </>
  );
};

export default Home;

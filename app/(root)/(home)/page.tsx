import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";
import TopMovies from "@/components/TopMovies";
import { showCase1, showCase2, showCase3 } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="flex-center flex-col gap-20">
        <div>
          <Showcase data={showCase1} />
        </div>
        <div>
          <Banner stylesOuter={"xl:items-end"} stylesInner={"xl:w-[62%]"} />
        </div>
        <div>
          <Showcase data={showCase2} />
        </div>
        <div>
          <Banner stylesOuter={""} stylesInner={""} />
        </div>
        <div>
          <TopMovies />
        </div>
        <div>
          <Showcase data={showCase3} />
        </div>
      </div>
    </>
  );
};

export default Home;

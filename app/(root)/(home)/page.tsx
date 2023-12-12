import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";
import TopMovies from "@/components/TopMovies";
import {
  showCase1,
  showCase2,
  showCase3,
  showCase4,
  showCase5,
  showCase6,
  showCase7,
} from "@/constants";
import {
  fetchDiscoverMovies,
  fetchDiscoverTV,
  fetchNewRelease,
  fetchNowPlayingMovies,
  fetchOnAirTV,
  fetchTopRatedMovies,
  fetchTopRatedTV,
} from "@/lib/utils";
import React from "react";

const Home = async () => {
  const newReleases = await fetchNewRelease();
  const discoverMovies = await fetchDiscoverMovies();
  const discoverTV = await fetchDiscoverTV();
  const topTV = await fetchTopRatedTV();
  const topMovies = await fetchTopRatedMovies();
  const latestMovies = await fetchNowPlayingMovies();
  const onAirTV = await fetchOnAirTV();

  return (
    <>
      <HeroSection />
      <div className="flex-center flex-col gap-20">
        <div>
          <Showcase data={showCase1} carouselItems={newReleases} />
        </div>
        <div>
          <Showcase data={showCase2} carouselItems={discoverMovies} />
        </div>
        <div>
          <Banner
            stylesOuter={"xl:items-end"}
            stylesInner={"xl:w-[60%]"}
            category={"movie"}
          />
        </div>
        <div>
          <Showcase data={showCase3} carouselItems={discoverTV} />
        </div>
        <div>
          <Showcase data={showCase4} carouselItems={topTV} />
        </div>
        <div>
          <Banner stylesOuter={""} stylesInner={""} category={"tv"} />
        </div>
        <div>
          <TopMovies />
        </div>
        <div>
          <Showcase data={showCase5} carouselItems={latestMovies} />
        </div>
        <div>
          <Showcase data={showCase6} carouselItems={topMovies} />
        </div>
        <div>
          <Showcase data={showCase7} carouselItems={onAirTV} />
        </div>
      </div>
    </>
  );
};

export default Home;

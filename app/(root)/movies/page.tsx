import DetailsHero from "@/components/DetailsHero";
import DetailsSection from "@/components/DetailsSection";
import Showcase from "@/components/Showcase";
import { showCase8 } from "@/constants";
import { fetchSimilarMovieByID } from "@/lib/utils";

import React from "react";

const Movies = async () => {
  const similarMovies = await fetchSimilarMovieByID();

  return (
    <div>
      <DetailsHero />
      <DetailsSection />
      <Showcase data={showCase8} carouselItems={similarMovies} />
    </div>
  );
};

export default Movies;

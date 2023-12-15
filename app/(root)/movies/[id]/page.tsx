import DetailsHero from "@/components/DetailsHero";
import DetailsSection from "@/components/DetailsSection";
import DetailsShowcase from "@/components/DetailsShowcase";
import { showCase8 } from "@/constants";
import {
  fetchCreditsByMovieID,
  fetchMovieByID,
  fetchSimilarMovieByID,
} from "@/lib/utils";
import { headers } from "next/dist/client/components/headers";

const Movies = async () => {
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const parts = currentUrl?.split("/");
  if (!parts) return { notFound: true };
  const movieId = { id: parseInt(parts[parts.length - 1]) };
  const fetchedMovieDetails = await fetchMovieByID(movieId);
  const fetchedSimilarMovies = await fetchSimilarMovieByID(movieId);
  const fetchCredits = await fetchCreditsByMovieID(movieId);

  return (
    <div>
      <DetailsHero carouselItems={fetchedMovieDetails} />
      <DetailsSection
        carouselItems={fetchedMovieDetails}
        actors={fetchCredits}
      />
      <DetailsShowcase data={showCase8} carouselItems={fetchedSimilarMovies} />
    </div>
  );
};

export default Movies;

import DetailsHero from "@/components/DetailsHero";
import DetailsSection from "@/components/DetailsSection";
import DetailsShowcase from "@/components/DetailsShowcase";
import Showcase from "@/components/Showcase";
import { showCase8 } from "@/constants";
import { fetchMovieByID, fetchSimilarMovieByID } from "@/lib/utils";
import { headers } from "next/dist/client/components/headers";

const Movies = async () => {
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const parts = currentUrl?.split("/");
  if (!parts) return { notFound: true };
  const movieId = { id: parseInt(parts[parts.length - 1]) };
  const fetchedMovieDetails = await fetchMovieByID(movieId);
  const fetchedSimilarMovies = await fetchSimilarMovieByID(movieId);
  return (
    <div>
      <DetailsHero carouselItems={fetchedMovieDetails} />
      <DetailsSection />
      <DetailsShowcase data={showCase8} carouselItems={fetchedSimilarMovies} />
    </div>
  );
};

export default Movies;

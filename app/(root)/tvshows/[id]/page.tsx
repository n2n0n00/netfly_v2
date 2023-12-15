import DetailsHero from "@/components/DetailsHero";
import DetailsSection from "@/components/DetailsSection";
import DetailsShowcase from "@/components/DetailsShowcase";
import { showCase9 } from "@/constants";
import {
  fetchCreditsByTVShowID,
  fetchSimilarTVShowByID,
  fetchTVShowByID,
} from "@/lib/utils";
import { headers } from "next/dist/client/components/headers";

const TvShowDetails = async () => {
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const parts = currentUrl?.split("/");
  if (!parts) return { notFound: true };
  const tvShowId = { id: parseInt(parts[parts.length - 1]) };
  const fetchedMovieDetails = await fetchTVShowByID(tvShowId);
  const fetchedSimilarMovies = await fetchSimilarTVShowByID(tvShowId);
  const fetchCredits = await fetchCreditsByTVShowID(tvShowId);

  return (
    <div>
      <DetailsHero carouselItems={fetchedMovieDetails} category="tv" />
      <DetailsSection
        carouselItems={fetchedMovieDetails}
        actors={fetchCredits}
        category="tv"
      />
      <DetailsShowcase
        data={showCase9}
        carouselItems={fetchedSimilarMovies}
        category="tv"
      />
    </div>
  );
};

export default TvShowDetails;

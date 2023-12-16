import { genresTvLibrary } from "@/constants";
import { fetchTvShowsByGenre } from "./utils";
import { useEffect, useState } from "react";

const useTvShowsData = () => {
  const [allFetchedData, setAllFetchedData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchDataForGenres = async () => {
      try {
        const newData = [];
        for (const item of genresTvLibrary) {
          const data = await fetchTvShowsByGenre({ id: item?.id });
          newData.push(data);
        }
        setAllFetchedData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataForGenres();
  }, []);

  return allFetchedData;
};

export default useTvShowsData;

// useMoviesData.js
import { useState, useEffect } from "react";
import { genresLibrary } from "@/constants";
import { fetchMoviesByGenre } from "@/lib/utils";

const useMoviesData = () => {
  const [allFetchedData, setAllFetchedData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchDataForGenres = async () => {
      try {
        const newData = [];
        for (const item of genresLibrary) {
          const data = await fetchMoviesByGenre({ id: item?.id });
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

export default useMoviesData;

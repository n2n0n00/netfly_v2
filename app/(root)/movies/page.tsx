"use client";
import React, { useEffect, useState } from "react";
import { genresLibrary } from "@/constants";
import { fetchMoviesByGenre } from "@/lib/utils";
import Showcase from "@/components/Showcase";
import Navbar from "@/components/navigation/Navbar";

const Movies = () => {
  // Explicitly define the type for allFetchedData state
  const [allFetchedData, setAllFetchedData] = useState<Array<any>>([]);

  useEffect(() => {
    // Fetch data for each genre
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

    // Call the fetchDataForGenres function
    fetchDataForGenres();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      <div>
        <div className="bg-white opacity-50">
          {" "}
          <Navbar />
        </div>

        {genresLibrary.map((item, index) => (
          <Showcase
            key={item.id}
            data={item.name}
            carouselItems={allFetchedData[index]}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;

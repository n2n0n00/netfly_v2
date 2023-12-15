import { extractGenreNames } from "@/lib/utils";
import { IMovieDetailsPageSynopsis } from "@/types";
import Image from "next/image";
import React from "react";

const AboutData = ({ label, value }: any) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-start justify-between flex-row xl:w-[60%] xl:gap-10">
      <p className="p1 text-white opacity-50">{label}</p>
      <p className="p1 text-white opacity-50 text-right">{value}</p>
    </div>
  </div>
);

const PersonBox = ({ actor, part, img }: any) => (
  <div className="flex-col flex-center gap-10 md:flex-row">
    <div className="">
      <Image
        src={`https://image.tmdb.org/t/p/original/${img}`}
        alt={actor}
        width={100}
        height={150}
      />
    </div>
    <div className="flex-start flex-col mb-12 lg:w-[300px]">
      <h5 className="h5 text-white">{actor}</h5>
      <p className="text-white p2 opacity-50">{part}</p>
    </div>
  </div>
);

const DetailsSection = ({
  carouselItems,
  category,
  actors,
}: IMovieDetailsPageSynopsis) => {
  const genresList = extractGenreNames(carouselItems?.genres);

  return (
    <div className="flex-center flex-col md:flex-row m-3 md:flex-start md:m-20">
      <div className="w-full lg:w-[50%] flex gap-20 flex-col">
        <div className="flex flex-col gap-10">
          <h4 className="h4 text-white font-redHatDisplay">About</h4>
          {category === "tv" ? (
            <div className="flex flex-col gap-4">
              <AboutData label={"Genre"} value={genresList} />
              <AboutData
                label={"Rating"}
                value={`${carouselItems?.vote_average}/10`}
              />
              <AboutData label={"Status"} value={carouselItems?.status} />
              <AboutData
                label={"Episodes"}
                value={carouselItems?.number_of_episodes}
              />
              <AboutData
                label={"Seasons"}
                value={carouselItems?.number_of_seasons}
              />
              <AboutData
                label={"Released On"}
                value={carouselItems?.first_air_date}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <AboutData label={"Genre"} value={genresList} />
              <AboutData
                label={"Rating"}
                value={`${carouselItems?.vote_average}/10`}
              />
              <AboutData label={"Status"} value={carouselItems?.status} />
              <AboutData label={"Duration"} value={carouselItems?.runtime} />
              <AboutData
                label={"Released On"}
                value={carouselItems?.release_date}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="h4 text-white font-redHatDisplay">Synopsis</h4>
          <p className="w-full text-justify p1 text-white opacity-50 xl:w-[100%]">
            {carouselItems?.overview}
          </p>
        </div>
      </div>
      <div className="w-[95vw] h-[2px] my-20 bg-white opacity-50 md:hidden lg:flex mx-10 lg:w-[2px] lg:h-screen" />
      <div className="flex flex-col gap-10 md:ml-5">
        <h4 className="h4 text-white font-redHatDisplay">Details</h4>
        <div className="flex-center flex-col md:gap-10">
          {actors?.map((item) => (
            <PersonBox
              key={item.name}
              actor={item.name}
              part={item.character}
              img={item.profile_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;

import Image from "next/image";
import React from "react";
import { calendar, subtitles, star } from "../public/index";
import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import { IAPIDataCall } from "@/types";
import { getYearFromDate } from "@/lib/utils";

export const MovieMetrics = ({ prop, img }: any) => (
  <div className="flex-center flex-row gap-2">
    <Image src={img} alt="calendar" width={15} height={15} />
    <p className="p2 text-white uppercase">{prop ? prop : "Not Disclosed"}</p>
  </div>
);

const HeroSection = async ({ carouselItems, genres }: IAPIDataCall) => {
  return (
    <>
      {carouselItems?.map((item) => (
        <section
          className="w-full"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
          key={item.title}
        >
          <div className="gradient_bg gap-10 flex flex-col mb-[5%]">
            <Navbar />
            <div className="">
              <div className="flex-start flex-col">
                <div className="flex-start gap-5 m-3 md:mx-20">
                  <MovieMetrics
                    img={calendar}
                    prop={getYearFromDate(item.release_date)}
                  />
                  <MovieMetrics
                    img={subtitles}
                    prop={item?.original_language}
                  />
                  <MovieMetrics img={star} prop={item.vote_average} />
                </div>

                {/* title of the movie will go here */}
                <Link href={`movies/${item.id}`}>
                  <div className="m-3 flex-start md:mx-20">
                    <h2 className="h2 text-white font-redHatDisplay">
                      {item?.title}
                    </h2>
                  </div>
                </Link>

                {/* genres of the movie will go here */}
                <div className="flex-start flex-row gap-5 m-3 md:mx-20">
                  {genres?.map((item) => (
                    <div className="white_btn" key={item}>
                      <p className="red_text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* description of the movie will go here */}
              <div className="flex-start flex-col gap-5 m-3 md:mx-20 lg:w-[50%]">
                <p className="text-white p1 max-md:p2 text-justify font-inter">
                  {item?.overview}
                </p>
                <Link href={`movies/${item.id}`}>
                  <div className="red_btn mb-20">
                    <p className="p2 text-white">Stream Now</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroSection;

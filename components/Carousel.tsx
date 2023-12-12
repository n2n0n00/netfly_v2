"use client";

import { IShowCase } from "@/types";
import React, { useRef } from "react";
import { PiArrowSquareLeft, PiArrowSquareRight } from "react-icons/pi";

const Carousel = ({ carouselItems }: IShowCase) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 250;
      } else {
        current.scrollLeft += 250;
      }
    }
  };

  return (
    <div className="flex-center flex-col md:flex-row w-full">
      <div className="relative z-50 -mr-5 max-md:hidden">
        <PiArrowSquareLeft
          color="white"
          size={50}
          onClick={() => scroll("left")}
        />
      </div>
      <div
        className="flex flex-row w-[90vw] gap-5 overflow-x-scroll no-scrollbar"
        ref={scrollRef}
      >
        {carouselItems?.map((item: any) => (
          <div key={item.title} className="flex-start flex-col gap-1">
            <div
              className="w-[250px] h-[300px]"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <p className="text-white opacity-50 p2 font-inter">
              Votes: {item.vote_count}&nbsp; | &nbsp;Rating: {item.vote_average}
            </p>
            <p className="p2 font-inter text-white">
              {item.title}
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-10 max-md:mt-5">
        <div className="z-50 -mr-5 hidden max-md:block">
          <PiArrowSquareLeft
            color="white"
            size={50}
            onClick={() => scroll("left")}
          />
        </div>
        <div className="z-50 -ml-5 relative">
          <PiArrowSquareRight
            color="white"
            size={50}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

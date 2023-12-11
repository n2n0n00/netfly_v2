"use client";

import React, { useRef } from "react";
import { PiArrowSquareLeft, PiArrowSquareRight } from "react-icons/pi";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 100;
      } else {
        current.scrollLeft += 100;
      }
    }
  };

  return (
    <div className="flex flex-row items-center justify-center mt-10 max-md:flex-col">
      <div className="z-50 -mr-5 max-md:hidden">
        <PiArrowSquareLeft
          color="white"
          size={50}
          onClick={() => scroll("left")}
        />
      </div>
      <div
        className="flex flex-row gap-5 overflow-x-hidden max-lg:w-[700px] max-md:w-[450px] max-sm:w-[250px]"
        ref={scrollRef}
      >
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
        <div>
          <div className="w-[250px] h-[150px] bg-black"></div>
          <p>Shit here</p>
          <p>Some other stuff here</p>
        </div>
      </div>
      <div className="flex flex-row gap-10 max-md:mt-5">
        <div className="z-50 -mr-5 hidden max-md:block">
          <PiArrowSquareLeft
            color="white"
            size={50}
            onClick={() => scroll("left")}
          />
        </div>
        <div className="z-50 -ml-5">
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

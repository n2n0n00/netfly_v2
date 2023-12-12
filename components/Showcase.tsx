import React from "react";
import Carousel from "./Carousel";
import { IShowCase } from "@/types";
import { showCase } from "@/constants";

const Showcase = ({ data }: IShowCase) => {
  return (
    <div className="flex-center flex-col gap-20">
      {data.map((item) => (
        <div
          key={item.title_1}
          className="m-3 flex-center flex-col gap-5 md:flex-start md:mx-10 gap-"
        >
          <p className="h3 text-white">
            {item.title_1} <span className="h3 red_text">{item.title_2}</span>
          </p>
          <Carousel />
        </div>
      ))}
    </div>
  );
};

export default Showcase;

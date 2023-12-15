import React from "react";
import Carousel from "./Carousel";
import { IShowCase } from "@/types";

const Showcase = ({ carouselItems, data, category }: IShowCase) => {
  return (
    <div className="flex-center flex-col gap-20">
      {data?.map((item: any) => (
        <div
          key={item.title_1}
          className="m-3 flex-center flex-col gap-5 md:flex-start md:mx-10"
        >
          <p className="h3 text-white text-center md:ml-8">
            {item.title_1} <span className="h3 red_text">{item.title_2}</span>
          </p>
          <Carousel carouselItems={carouselItems} category={category} />
        </div>
      ))}
    </div>
  );
};

export default Showcase;

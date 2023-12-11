import React from "react";
import Carousel from "./Carousel";

const Showcase = () => {
  return (
    <div className="m-3 flex-center flex-col gap-5 md:flex-start md:mx-10">
      <p className="h3 text-white">
        New Release <span className="h3 red_text">This Week</span>
      </p>
      <Carousel />
    </div>
  );
};

export default Showcase;

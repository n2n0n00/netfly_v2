import React from "react";
import Carousel from "./Carousel";

const Showcase = () => {
  return (
    <div>
      <div className="">
        <p className="h3 text-white">
          New Release <span className="h3 red_text">This Week</span>
        </p>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Showcase;

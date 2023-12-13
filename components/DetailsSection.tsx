import { detailsData } from "@/constants";
import React from "react";

const AboutData = ({ label, value }: any) => (
  <div className="flex-between flex-row xl:w-[60%] xl:gap-10">
    <p className="p1 text-white opacity-50">{label}</p>
    <p className="p1 text-white opacity-50">{value}</p>
  </div>
);

// const PersonBox = ({ img, title, part }: any) => (
const PersonBox = ({ title, part }: any) => (
  <div className="flex-col flex-center gap-10 md:flex-row">
    <div className="w-[300px] h-[200px] bg-white rounded-lg" />
    <div className="flex-start flex-col mb-12">
      <h5 className="h5 text-white">{title}</h5>
      <p className="text-white p2 opacity-50">{part}</p>
    </div>
  </div>
);

const DetailsSection = () => {
  return (
    <div className="flex-center flex-col md:flex-row m-3 md:flex-start md:m-20">
      <div className="w-full xl:w-[50%] flex gap-20 flex-col">
        <div className="flex flex-col gap-10">
          <h4 className="h4 text-white font-redHatDisplay">About</h4>
          <div className="flex flex-col gap-4">
            {detailsData.map((item) => (
              <AboutData key={item.label} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="h4 text-white font-redHatDisplay">Synopsis</h4>
          <p className="w-full text-justify p1 text-white opacity-50 xl:w-[100%]">
            Our friendly neighborhood web-slinger is unmasked and no longer able
            to separate his normal life as Gavin Parker from the high stakes of
            being a superhero. When Gavin asks for help, the stakes become even
            more dangerous, forcing him to discover what it truly means to be
            what he means to be.
          </p>
        </div>
      </div>
      <div className="w-[95vw] h-[2px] my-20 bg-white opacity-50 md:hidden lg:flex mx-10 lg:w-[2px] lg:h-screen" />
      <div className="flex flex-col gap-10 md:ml-5">
        <h4 className="h4 text-white font-redHatDisplay">Details</h4>
        <div className="flex flex-col md:gap-10">
          <PersonBox title={"Mac MacDuffy"} part={"director"} />
          <PersonBox title={"Mac MacDuffy"} part={"director"} />
          <PersonBox title={"Mac MacDuffy"} part={"director"} />
          <PersonBox title={"Mac MacDuffy"} part={"director"} />
          <PersonBox title={"Mac MacDuffy"} part={"director"} />
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;

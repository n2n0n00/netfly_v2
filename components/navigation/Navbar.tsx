/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { NavColor } from "@/types";
import FunctionalSearchBar from "./FunctionalSearchBar";

const Navbar = ({ bgColor }: NavColor) => {
  return (
    <nav>
      <div className="relative flex flex-row justify-around items-center">
        <Link href="/">
          {bgColor === "dark" ? (
            <h1 className="logo font-brunoAce my-5 text-white">
              Net<span className="red_text">Fly</span>
            </h1>
          ) : (
            <h1 className="logo font-brunoAce my-5 text-white">
              Net<span className="red_text">Fly</span>
            </h1>
          )}
        </Link>
        <div className="flex flex-row justify-between gap-10 my-5">
          {NavLinks.map((item) => (
            <Link
              href={item.route}
              key={item.label}
              className="flex max-lg:hidden"
            >
              {bgColor === "dark" ? (
                <p className="p2 text-white font-bold">{item.label}</p>
              ) : (
                <p className="p2 text-white font-bold">{item.label}</p>
              )}
            </Link>
          ))}
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="max-lg:hidden flex">
          {" "}
          <FunctionalSearchBar
            styles={"w-[300px] h-[38px]"}
            resultsBox={"top-14 left-0 w-full h-[400px]"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

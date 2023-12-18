import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { NavColor } from "@/types";

const Navbar = ({ bgColor }: NavColor) => {
  return (
    <nav>
      <div className="flex flex-row justify-around items-center">
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
              className="flex max-md:hidden"
            >
              {bgColor === "dark" ? (
                <p className="p2 text-white font-bold">{item.label}</p>
              ) : (
                <p className="p2 text-white font-bold">{item.label}</p>
              )}
            </Link>
          ))}
          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>

        <div className="flex max-md:hidden my-5">
          {/* global search to be implemented later on */}
          {bgColor === "dark" ? (
            <CiSearch size="25px" color="white" />
          ) : (
            <CiSearch size="25px" color="white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

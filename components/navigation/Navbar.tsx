import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-around items-center">
        <Link href="/">
          <h1 className="logo font-brunoAce my-5">
            Net<span className="red_text">Fly</span>
          </h1>
        </Link>
        <div className="flex flex-row justify-between gap-10 my-5">
          {NavLinks.map((item) => (
            <Link
              href={item.route}
              key={item.label}
              className="flex max-md:hidden"
            >
              <p className="p2 text-black font-bold">{item.label}</p>
            </Link>
          ))}
          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>

        <div className="flex max-md:hidden my-5">
          {/* global search to be implemented later on */}
          <CiSearch size="25px" color="black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

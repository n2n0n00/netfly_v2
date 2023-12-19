"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { NavColor } from "@/types";
import SearchBar from "./SearchBar";
// import { fetchSearchBarInput } from "@/lib/utils";
import axios from "axios";
import { fetchSearchBarInput } from "@/lib/utils";

interface SearchResult {
  id: number;
  title: string;
  name: string;
  overview: string;
  media_type: string;
  // Add other properties based on the API response
}

const Navbar = ({ bgColor }: NavColor) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery.trim() === "") {
          setSearchResults([]);
          return;
        }

        setLoading(true);

        const search = await fetchSearchBarInput({ searchQuery });

        setSearchResults(search);
        setLoading(false);
      } catch (error) {
        console.error("Error searching:", error);
        setLoading(false);
      }
    };

    // Call fetchData when searchQuery changes
    fetchData();
  }, [searchQuery]);

  const renderLink = (media_type: string, id: number) => {
    switch (media_type) {
      case "tv":
        return `/tvshows/${id}`;
      case "movie":
        return `/movies/${id}`;
      default:
        return "/";
    }
  };

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

          <SearchBar
            styles={"w-[300px] h-[38px]"}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {loading ? <p>Loading...</p> : null}
          {searchResults.map((item) => (
            <Link href={renderLink(item.media_type, item.id)} key={item.id}>
              <h2>{item.title || item.name}</h2>
              <p>{item.overview}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

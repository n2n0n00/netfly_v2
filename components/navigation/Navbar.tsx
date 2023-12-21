/* eslint-disable react/react-in-jsx-scope */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { NavColor } from "@/types";
import SearchBar from "./SearchBar";
import { fetchSearchBarInput, getYearFromDate } from "@/lib/utils";
import Image from "next/image";

interface SearchResult {
  id: number;
  title: string;
  name: string;
  media_type: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const Navbar = ({ bgColor }: NavColor) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let delayTimer: NodeJS.Timeout;

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

    const delayedFetch = () => {
      clearTimeout(delayTimer);
      delayTimer = setTimeout(() => {
        fetchData();
      }, 800); // 0.8 sec delay
    };

    delayedFetch();

    return () => {
      clearTimeout(delayTimer);
    };
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

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        searchContainerRef.current &&
        e.target &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setDialogVisible(false);
        setSearchQuery("");
      }
    };

    setDialogVisible(false);

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const searchResultsBox =
    searchResults.length > 0 && searchQuery.trim() !== "" ? (
      <div className="absolute top-14 left-0 w-full p-4  shadow-md z-50 h-[400px] overflow-y-scroll dark_blue_search no-scrollbar">
        {searchResults.map((item) => (
          <Link href={renderLink(item.media_type, item.id)} key={item.id}>
            <div className="flex-start flex-row gap-5 mb-5">
              <Image
                width={70}
                height={90}
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
              <div className="flex-start flex-col">
                <p className="p1 text-white">{item.title || item.name}</p>
                <p className="p2 text-white">
                  {getYearFromDate(item.release_date)}
                </p>
                <p className="p2 text-white">{item.vote_average}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : null;

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

        <div
          ref={searchContainerRef}
          className="relative flex max-md:hidden my-5 flex-col"
        >
          {/* global search to be implemented later on */}
          <SearchBar
            styles={"w-[300px] h-[38px]"}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {loading ? (
            <p>Loading...</p>
          ) : (
            // Conditionally render the dialog box
            searchResultsBox
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

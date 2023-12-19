import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

const OnClickSearchBar = ({ styles, searchQuery, setSearchQuery }: any) => {
  return (
    <div
      className={`dark_blue_search rounded-xl flex flex-row items-center justify-center ${styles}`}
    >
      <div className="mx-1 flex-center flex-col">
        <Button type="submit" style={{ backgroundColor: "#1b3557" }}>
          <CiSearch size="25px" color="white" />
        </Button>
      </div>

      <div className={`w-full mx-1 flex-center flex-col`}>
        <Input
          type="search"
          placeholder="Search here for..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            backgroundColor: "#1b3557",
            fontSize: "1.1rem",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

const SearchBar = ({ styles, searchQuery, setSearchQuery }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div onClick={handleClick}>
      {isOpen ? (
        <OnClickSearchBar
          styles={styles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      ) : (
        <CiSearch size="25px" color="white" />
      )}
    </div>
  );
};

export default SearchBar;

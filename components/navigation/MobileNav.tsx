import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { menubar } from "@/public";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SearchBar from "./SearchBar";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={menubar} alt="menu" width={35} height={35} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex-center flex-col w-full">
            <div className="flex w-full justify-center">
              <Link href="/">
                <h1 className="logo font-brunoAce text-white">
                  Net<span className="red_text">Fly</span>
                </h1>
              </Link>
            </div>
            <div className="mt-5 w-full flex-center cursor-pointer">
              {" "}
              <SearchBar styles={"w-full h-[35px]"} />
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col justify-between gap-10 items-center mt-10">
              {NavLinks.map((item) => (
                <Link href={item.route} key={item.label}>
                  <p className="p2 text-white">{item.label}</p>
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

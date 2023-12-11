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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={menubar} alt="menu" width={35} height={35} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex w-full justify-center">
              <Link href="/">
                <h1 className="logo font-brunoAce text-white">
                  Net<span className="red_text">Fly</span>
                </h1>
              </Link>
            </div>
            <div className="mt-5 w-full dark_blue_search rounded-xl h-[35px] flex flex-row items-center">
              <div className="m-5">
                <CiSearch size="25px" color="white" />
              </div>

              {/** add here the search bar */}
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

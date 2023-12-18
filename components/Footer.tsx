import { footerContacts, footerLinks } from "@/constants";
import { FooterLinks } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickLinks = ({ title, links }: FooterLinks) => (
  <div className="flex-center flex-col md:flex-start">
    <p className="p2_bold text-white">{title}</p>
    <div className="flex-center flex-col md:flex-start">
      {links.map((item) => (
        <Link key={item.title} href={item.url}>
          <p className="p2 text-white opacity-50">{item.title}</p>
        </Link>
      ))}
    </div>
  </div>
);

const FooterContact = ({ title, img }: any) => (
  <div className="flex-center flex-col md:justify-start md:flex-row md:gap-5">
    <Image src={img} height={20} width={20} alt={title} />
    <p className="p3 opacity-50 text-white">{title}</p>
  </div>
);

const Footer = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="mx-3 lg:mx-20 mt-3 md:mx-5 flex-between md:items-start flex-col md:flex-row max-sm:h-[100vh] md:mt-20">
        <div className="flex-center flex-col md:flex-start">
          <Link href="/">
            <h1 className="logo font-brunoAce my-5 text-white">
              Net<span className="red_text">Fly</span>
            </h1>
          </Link>
          <div className="flex-center flex-col gap-2 md:flex-start">
            {footerContacts.map((item) => (
              <FooterContact
                key={item.title}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </div>
        <div className="flex-center flex-col md:flex-row md:gap-20 md:flex-start gap-10 mb-6 mt-6">
          {footerLinks.map((item) => (
            <QuickLinks
              key={item.title}
              title={item.title}
              links={item.links}
            />
          ))}
        </div>
      </div>
      <div className="flex-center flex-col gap-10 mb-20">
        <div className="w-[90vw] h-[2px] bg-white opacity-50" />
        <p className="p3 text-white opacity-50 text-center">
          Copyright © 2024 MovieMax. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;

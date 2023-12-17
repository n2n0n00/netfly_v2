import Navbar from "@/components/navigation/Navbar";
import { contactDetails } from "@/constants";
import Image from "next/image";
import React from "react";

const ContactInfo = ({ title, img, subtitle }: any) => (
  <div className="flex-center flex-col gap-3 mb-10 sm:flex-row sm:gap-10 sm:w-[300px] sm:flex sm:justify-between ">
    <Image src={img} height={40} width={40} alt={title} />

    <div className="flex flex-col w-full sm:items-start">
      <p className="p2 text-white text-center">{title}</p>
      <p className="p2 text-white opacity-50 text-center sm:text-left">
        {subtitle}
      </p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="contact_bg_gradient">
      <Navbar bgColor="dark" />
      <div className="m-3 lg:m-20">
        <div className="flex-center flex-col h-[80vh]">
          <p className="p3 text-white md:p2">Reach out!</p>
          <h2 className="h2 font-redHatDisplay red_text">Contact Us</h2>
          <p className="p2 text-white text-center md:p1">
            Tell us about your experience and questions. We gladly help you to
            give the best solution.
          </p>
        </div>
        <div className="flex items-center justify-between flex-col lg:flex-row h-full lg: w-full">
          <div className="flex-center flex-col gap-12 lg:flex-start">
            <h3 className="text-white h3 font-redHatDisplay">Form</h3>
          </div>
          <div className="flex-center flex-col gap-12 lg:flex-start">
            <h3 className="text-white h3 font-redHatDisplay">Contact Info</h3>
            <div className="flex-center flex-col lg:flex-start">
              <h4 className="text-white h4 mb-10">NetFly</h4>
              {contactDetails.map((item) => (
                <ContactInfo
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  key={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

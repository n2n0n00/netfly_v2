import { ContactForm } from "@/components/ContactForm";
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
      <div className="mx-3 mt-3 md:mx-20 md:mt-20">
        <div className="flex-center flex-col h-[80vh]">
          <p className="p3 text-white md:p2 text-center">Reach out!</p>
          <h2 className="md:h2 h3 font-redHatDisplay red_text text-center">
            Contact Us
          </h2>
          <p className="p3 max-sm:leading-[17px] text-white text-center md:p1">
            Tell us about your experience and questions. We gladly help you to
            give the best solution.
          </p>
        </div>
        <div className="flex items-center md:items-start justify-center flex-col md:flex-row h-full md:w-full md:gap-10 lg:gap-[20%] gap-20">
          <div className="flex-center flex-col gap-12 md:flex-start w-full md:w-[50%] lg:w-[50%] xl:w-[30%] h-full">
            <h3 className="text-white h3 font-redHatDisplay">Form</h3>
            <ContactForm />
          </div>
          <div className="flex-center flex-col gap-12 md:flex-start">
            <h3 className="text-white h3 font-redHatDisplay">Contact Info</h3>
            <div className="flex-center flex-col md:flex-start">
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

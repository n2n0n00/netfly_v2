"use client";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      if (serviceId)
        if (templateId)
          emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-start flex-col gap-4 w-full h-full relative"
    >
      <div className="flex-start flex-col w-full h-full">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full dark_blue border-[0.5px]"
        />
      </div>
      <div className="flex-start flex-col w-full h-full">
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full dark_blue border-[0.5px]"
        />
      </div>
      <div className="flex-start flex-col w-full h-full">
        <textarea
          name="message"
          placeholder="Write Your Message Here..."
          className="w-full dark_blue border-[0.5px]"
        />
      </div>
      <div className="flex-center flex-row w-full md:flex-start mt-5">
        <div className="light_red rounded-md shadow-xl">
          {" "}
          <input
            type="submit"
            value="Send Message"
            className="m-2 text-white cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

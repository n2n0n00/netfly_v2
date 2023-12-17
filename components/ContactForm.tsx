"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "@/lib/useAlert";
import AlertComponent from "./Alert";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const form = useRef<HTMLFormElement>(null);
  const [thisForm, setThisForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setThisForm({ ...thisForm, [name]: value });
  };

  // Handle form submission
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (serviceId && templateId) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: thisForm.name,
            to_name: "The Developer",
            from_email: thisForm.email,
            to_email: "athinat690@gmail.com",
            message: thisForm.message,
          },
          publicKey
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: "Thank you for your message 😃",
              type: "success",
            });

            setTimeout(() => {
              hideAlert({ show: false });
              setThisForm({
                name: "",
                email: "",
                message: "",
              });
            }, 3000);
          },
          (error) => {
            setLoading(false);
            console.error(error);

            showAlert({
              show: true,
              text: "I didn't receive your message 😢",
              type: "danger",
            });
          }
        );
    }
  };

  // JSX structure of the component
  return (
    <section className="flex flex-col w-full">
      <div>{alert.show && <AlertComponent {...alert} />}</div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-start flex-col gap-4 w-full h-full relative"
      >
        <div className="flex-start flex-col w-full h-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full dark_blue border-[0.5px] rounded-md p1 text-white"
            required
            value={thisForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex-start flex-col w-full h-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full dark_blue border-[0.5px] rounded-md p1 text-white"
            value={thisForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-start flex-col w-full h-full">
          <textarea
            name="message"
            placeholder="Write Your Message Here..."
            className="w-full dark_blue border-[0.5px] text-white rounded-md p1"
            rows={5}
            value={thisForm.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex-center flex-row w-full md:flex-start my-5">
          <div className="light_red rounded-md shadow-xl">
            <button
              type="submit"
              disabled={loading}
              className="m-2 text-white cursor-pointer p1"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

// Export the ContactForm component
export default ContactForm;

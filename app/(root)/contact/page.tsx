import Navbar from "@/components/navigation/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div className="contact_bg_gradient">
      <Navbar bgColor="dark" />
      <div className="m-3">
        <div className="flex-center flex-col h-[80vh]">
          <p className="p3 text-white md:p2">Reach out!</p>
          <h2 className="h2 font-redHatDisplay red_text">Contact Us</h2>
          <p className="p2 text-white text-center md:p1">
            Tell us about your experience and questions. We gladly help you to
            give the best solution.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

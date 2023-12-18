import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="dark_blue">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;

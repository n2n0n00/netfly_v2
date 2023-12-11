import Navbar from "@/components/navigation/Navbar";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="dark_blue">{children}</div>
    </main>
  );
};

export default Layout;

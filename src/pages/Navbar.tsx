"use client";
import React, { useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { AboutLoader } from "../components/ui/about-loader";

const Navbar = () => {
  const [showLoader, setShowLoader] = useState(false);

  const handleAboutClick = () => {
    setShowLoader(true);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about", onClick: handleAboutClick },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "mailto:22am014@sctce.ac.in" },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} className="bg-transparent backdrop-blur-md top-10" />
      {showLoader && (
        <AboutLoader
          loading={showLoader}
          onEscape={() => setShowLoader(false)}
        />
      )}
    </div>
  );
};

export default Navbar;

import React from "react";

interface NavbarProps {
  children?: React.ReactNode;
  bg: string;
  variant: string;
  expand: string;
}

const Navbar: React.FC<NavbarProps> = ({ bg, variant, expand, children }) => {
  return (
    <nav
      className={`bg-${bg} text-black py-3 ${variant} ${
        expand ? "expand-lg" : ""
      }`}
    >
      {children}
    </nav>
  );
};

export default Navbar;

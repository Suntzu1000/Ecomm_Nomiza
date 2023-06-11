import React from "react";

interface NavbarBrandProps {
  children?: React.ReactNode;
  href: string;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-black font-bold">
      {children}
    </a>
  );
};

export default NavbarBrand;

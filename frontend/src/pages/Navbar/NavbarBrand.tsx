import React, { useContext } from "react";
import { Store } from "../../Store";

interface NavbarBrandProps {
  children?: React.ReactNode;
  href: string;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ href, children }) => {
  const {
    state: { mode },
  } = useContext(Store);
  return (
    <a href={href} className={`font-bold text-${
    mode === "light" ? "gray-400" : "white"
  }`}>
      {children}
    </a>
  );
};

export default NavbarBrand;

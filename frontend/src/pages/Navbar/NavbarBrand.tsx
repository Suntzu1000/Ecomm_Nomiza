import React, { useContext } from "react";
import { Store } from "../../Store";
import { Link } from "react-router-dom";

interface NavbarBrandProps {
  children?: React.ReactNode;
  to: string;
  className?: string;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ to, children, className }) => {
  const {
    state: { mode },
  } = useContext(Store);
  return (
    <Link to={to} className={`${className} font-bold text-${
    mode === "light" ? "gray-400" : "white"
  }`}>
      <h1>{children}</h1>
    </Link>
  );
};

export default NavbarBrand;

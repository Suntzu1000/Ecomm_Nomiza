import React from "react";

type NavProps = {
  children?: React.ReactNode;
  className?: string
};

const Nav: React.FC<NavProps> = ({ children, className }) => {
  return (
    <nav className="flex justify-end w-full">
      <ul className={`flex space-x-4 ${className}`}>{children}</ul>
    </nav>
  );
};

export default Nav;

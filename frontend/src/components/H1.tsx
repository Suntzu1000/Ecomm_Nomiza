import React, { useContext } from "react";
import { Store } from "../Store";

interface H1Props {
  children?: React.ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className }) => {

  const {
    state: { mode },
  } = useContext(Store);

  return (
    <>
      <h1 className={`${className} text-${
        mode === "light" ? "white" : "gray-700"
      } `}>{children}</h1>
    </>
  );
};
export default H1;

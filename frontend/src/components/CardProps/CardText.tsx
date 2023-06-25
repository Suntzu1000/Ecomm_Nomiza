import React, { useContext } from "react";
import { Store } from "../../Store";

interface CardTextProps {
  children: React.ReactNode;
}

const CardText: React.FC<CardTextProps> = ({ children }) => {
  const {
    state: { mode },
  } = useContext(Store);
 
  return <p className={`text-lg font-medium  mb-2  text-${
    mode === "light" ? "white" : "gray-900"
  }`}>{children}</p>;
};

export default CardText;

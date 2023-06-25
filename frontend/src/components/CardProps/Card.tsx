import React, { useContext } from "react";
import { Store } from "../../Store";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div
      className={`rounded-lg shadow p-6 bg-${
        mode === "light" ? "gray-800" : "white"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;

import React, { useContext } from "react";
import { Store } from "../../Store";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = "p-6",
}) => {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div
      className={`${className}  rounded-lg shadow ${padding} bg-${
        mode === "light" ? "gray-800" : "white"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;

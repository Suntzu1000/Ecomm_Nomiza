import React, { useContext } from "react";
import { Store } from '../../Store';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {

  const {
    state: { mode },
  } = useContext(Store);

  return (
    <h2 className={`text-lg font-medium mb-2 text-${
      mode === "light" ? "white" : "gray-900"
    } `}>
      {children}
    </h2>
  );
};

export default CardTitle;

// CustomListGroup.tsx
import React, { useContext } from "react";
import { Store } from "../../Store";

interface CustomListGroupProps {
  children: React.ReactNode;
  variant?: "flush" | "default";
  className?: string;
}

const ListGroup: React.FC<CustomListGroupProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div
      className={`text-${
        mode === "light" ? "gray-700" : "white"
      } rounded-lg shadow-md p-4 bg-${
        mode === "light" ? "gray-800" : "white"
      } ${
        variant === "flush" ? "shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ListGroup;

// CustomListGroup.tsx
import React, { FC, useContext } from "react";
import { Store } from "../Store";
import { CustomListItemProps } from "../types/ListGroup";

interface CustomListGroupProps {
  children: React.ReactNode;
  variant?: "flush" | "default";
  className?: string;
}

const ListGroup: ListComponent = ({
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
      } rounded-lg shadow-md p-2 bg-${
        mode === "light" ? "gray-800" : "white"
      } ${
        variant === "flush" ? "shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};


ListGroup.Item = function ListGroupItem({ children, className }: CustomListItemProps) {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div className={`px-2 py-2 text-${
      mode === "light" ? "white" : "gray-700"
    }  bg-${
      mode === "light" ? "gray-800" : "white"
    } ${className}`}>{children}</div>
  );
}

type ListComponent = FC<CustomListGroupProps> & {
  Item: FC<CustomListItemProps>;
}
 
export default ListGroup;

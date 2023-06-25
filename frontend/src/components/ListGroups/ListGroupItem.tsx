// CustomListItem.tsx
import React, { useContext } from "react";
import { Store } from "../../Store";

interface CustomListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListGroupItem: React.FC<CustomListItemProps> = ({
  children,
  className,
}) => {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div className={`px-4 py-2 text-${
      mode === "light" ? "white" : "gray-700"
    }  bg-${
      mode === "light" ? "gray-800" : "white"
    } ${className}`}>{children}</div>
  );
};

export default ListGroupItem;

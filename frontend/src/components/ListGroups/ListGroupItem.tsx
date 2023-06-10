// CustomListItem.tsx
import React from 'react';

interface CustomListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListGroupItem: React.FC<CustomListItemProps> = ({ children, className }) => {
  return <div className={`px-4 py-2 text-gray-700 ${className}`}>{children}</div>;
};

export default ListGroupItem;

// CustomListGroup.tsx
import React from 'react';

interface CustomListGroupProps {
  children: React.ReactNode;
  variant?: 'flush' | 'default';
  className?: string;
}

const ListGroup: React.FC<CustomListGroupProps> = ({ children, variant = 'default', className }) => {
  return <div className={`bg-white rounded-lg shadow-md p-4 ${variant === 'flush' ? 'shadow-md' : ''} ${className}`}>{children}</div>;
};

export default ListGroup;

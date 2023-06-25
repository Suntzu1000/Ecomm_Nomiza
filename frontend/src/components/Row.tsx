import React from 'react';

interface RowProps {
  className?: string;
  children?: React.ReactNode; 
  onClick?: () => void;
}

const Row: React.FC<RowProps> = ({ className = '', children, onClick }) => {
  return <div className={`flex flex-wrap -mx-4 ${className}`} onClick={onClick}>{children}</div>;
};

export default Row;

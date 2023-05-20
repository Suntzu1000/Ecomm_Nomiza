import React from 'react';

interface RowProps {
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children
}

const Row: React.FC<RowProps> = ({ className = '', children }) => {
  return <div className={`flex flex-wrap -mx-4 ${className}`}>{children}</div>;
};

export default Row;

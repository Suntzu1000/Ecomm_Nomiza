import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h2 className="text-lg font-medium text-gray-900 mb-2">
      {children}
    </h2>
  );
};

export default CardTitle;

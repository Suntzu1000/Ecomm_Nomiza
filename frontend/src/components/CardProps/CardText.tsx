import React from 'react';

interface CardTextProps {
  children: React.ReactNode;
}

const CardText: React.FC<CardTextProps> = ({ children }) => {
  return (
    <p className="text-lg font-medium text-gray-900 mb-2">
      {children}
    </p>
  );
};

export default CardText;
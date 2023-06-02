import React from 'react';

interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="text-gray-700">
      {children}
    </div>
  );
};

export default CardBody;

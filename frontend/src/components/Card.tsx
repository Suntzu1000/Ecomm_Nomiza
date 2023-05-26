import React from 'react';

interface CardProps {
  className?: string;
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  button?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', imageSrc, title, subtitle, text, button }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {imageSrc && (
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {subtitle && <h3 className="text-gray-600">{subtitle}</h3>}
        {text && <p className="mt-2 text-gray-600">{text}</p>}
        {button && <div className="mt-4">{button}</div>}
      </div>
    </div>
  );
};

export default Card;

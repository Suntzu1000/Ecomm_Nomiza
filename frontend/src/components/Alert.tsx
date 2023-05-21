import React from 'react';

interface AlertProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children

}

const Alert: React.FC<AlertProps> = ({ variant = 'primary', className = '', children }) => {
  const variants = {
    primary: 'bg-blue-100 border-blue-500 text-blue-700',
    secondary: 'bg-gray-100 border-gray-500 text-gray-700',
    success: 'bg-green-100 border-green-500 text-green-700',
    danger: 'bg-teal-100 border-teal-500 text-teal-700 ',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-red-100 border-red-500 text-red-700',
    light: 'bg-gray-200 border-gray-500 text-gray-700',
    dark: 'bg-gray-700 border-gray-500 text-gray-100',
  };

  return (
    <div className={`border-l-4 p-4 ${variants[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;


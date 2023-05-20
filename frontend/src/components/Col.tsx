import React from "react";

interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children
}

const Col: React.FC<ColProps> = ({
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  className = "",
  children,
}) => {
  return (
    <div
      className={`w-full px-4 sm:w-${sm}/12 md:w-${md}/12 lg:w-${lg}/12 xl:w-${xl}/12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Col;

import React from "react";

interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  width?: string; 
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children
}

const Col: React.FC<ColProps> = ({
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  width = "w-[100%]",
  className = "",
  children,
}) => {
  return (
    <div
      className={` px-2 sm:w-${sm}/12 md:w-${md}/12 lg:w-${lg}/12 xl:w-${xl}/12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Col;

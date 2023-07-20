import React from "react";

interface RowProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  flex?: string;
  flexwrap?: string;
  gap?: string;
}

const Row: React.FC<RowProps> = ({
  className = "",
  children,
  onClick,
  flex = "flex",
  flexwrap = "flex-wrap",
  gap,
}) => {
  return (
    <div className={`${gap ? gap : flex} w-full -mx-4 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Row;

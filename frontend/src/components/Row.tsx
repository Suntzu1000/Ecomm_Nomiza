import React from "react";

interface RowProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  flex?: string;
  flexwrap?: string;
}

const Row: React.FC<RowProps> = ({
  className = "",
  children,
  onClick,
  flex = "flex",
  flexwrap = "flex-wrap",
}) => {
  return (
    <div className={`${flex} ${flexwrap} -mx-4 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Row;

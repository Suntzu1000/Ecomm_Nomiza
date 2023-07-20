import React from "react";

interface ColProps {
  md?: number;
  className?: string;
  children?: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ className = "", children, md }) => {
  // Generate the column width style based on the 'md' prop value
  const colWidthStyle = md ? { width: `${(md / 12) * 100}%` } : {};

  return (
    <div className={`px-2 ${className}`} style={colWidthStyle}>
      {children}
    </div>
  );
};

export default Col;








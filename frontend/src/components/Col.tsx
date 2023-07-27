import React from "react";

type MdRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps {
  md?: MdRange;
  className?: string;
  children?: React.ReactNode;
}


const Col: React.FC<ColProps> = ({ className = "", children, md }) => {
  // Check if 'md' is greater than 12 and if so, set it to 12
  if (md && md > 12) {
    md = 12;
  }

  // Generate the column width style based on the 'md' prop value
  const colWidthStyle = md ? { width: `${(md / 12) * 100}%` } : {};

  return (
    <div className={`px-2 ${className}`} style={colWidthStyle}>
      {children}
    </div>
  );
};

export default Col;









import React, { HTMLAttributes, ReactNode } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  animation?: "border" | "grow";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

const Spinner: React.FC<SpinnerProps> = ({
  animation = "border",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-8 w-8 border-4",
  };

  const animations = {
    border: "border-gray-300 border-t-4 animate-spin",
    grow: "border-gray-300 rounded-full p-12 text-center animate-pulse",
  };

  return (
    <div
      className={`${sizes[size]} ${animations[animation]} ${className}`}
      role="status"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Spinner;


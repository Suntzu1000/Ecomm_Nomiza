import React from "react";

interface SpinnerProps {
  animation?: "border" | "grow";
  role?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children
}

const Spinner: React.FC<SpinnerProps> = ({
  animation = "border",
  role = "status",
  size = "md",
  className = "",
  children,
}) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-8 w-8 border-4",
  };

  const animations = {
    border: "border-gray-300 border-t-4 animate-spin",
    grow: "border-gray-300 rounded-full p-2 animate-pulse",
  };

  return (
    <div
      className={`${sizes[size]} ${animations[animation]} ${className}`}
      role={role}
    >
      {children}
    </div>
  );
};

export default Spinner;

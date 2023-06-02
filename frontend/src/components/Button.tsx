import classNames from 'classnames';


interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick?: () => void;
  }
  


const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classes = classNames(
    "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm",
    {
      "text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500":
        variant === "primary",
      "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500":
        variant === "secondary",
      "text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500":
        variant === "success",
      "text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500":
        variant === "danger",
      "text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500":
        variant === "warning",
      "text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500":
        variant === "info",
      "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500":
        variant === "light",
      "text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500":
        variant === "dark",
      "px-2.5 py-1.5 text-sm rounded-md": size === "sm",
      "px-4 py-2 text-base rounded-md": size === "md",
      "px-6 py-3 text-lg rounded-md": size === "lg",
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

interface ContainerProps {
  fluid?: boolean;
  className?: string;
  children?: React.ReactNode; // Definir o tipo da propriedade children
}

const Container: React.FC<ContainerProps> = ({
  fluid = false,
  className = "",
  children,
}) => {
  const containerClass = fluid ? "container-fluid" : "container";
  return (
    <div className={`${containerClass} mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};
export default Container;

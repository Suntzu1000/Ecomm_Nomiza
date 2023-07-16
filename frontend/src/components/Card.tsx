import  React, { useContext, FC } from "react";
import { Store } from "../Store";
import { CardBodyProps, CardProps, CardTextProps, CardTitleProps } from "../types/Card";



const Card: CardComponent = ({ children, className, padding = "p-6" }) => {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <div
      className={`${className}  rounded-lg shadow ${padding} bg-${
        mode === "light" ? "gray-800" : "white"
      }`}
    >
      {children}
    </div>
  );
};

Card.Body = function CartBody({ children }: CardBodyProps) {
  return <div className="text-gray-700">{children}</div>;
};

Card.Text = function CardText({ children, className, as = 'p', variant = 'primary' }: CardTextProps) {
  const {
    state: { mode },
  } = useContext(Store);

  const textColor = mode === "light" ? "white" : "gray-900";

  const classNames = [
    'text-lg',
    'font-medium',
    'mb-2',
    `text-${textColor}`,
    `bg-${variant}`,
    className
  ].join(' ');


  return  React.createElement(as, { className: classNames }, children)
};

Card.Title = function CartTitle({ children }: CardTitleProps) {
  const {
    state: { mode },
  } = useContext(Store);

  return (
    <h2
      className={`text-lg font-medium mb-2 text-${
        mode === "light" ? "white" : "gray-900"
      } `}
    >
      {children}
    </h2>
  );
};

type CardComponent = FC<CardProps> & {
  Body: FC<CardBodyProps>;
  Text: FC<CardTextProps>;
  Title: FC<CardTitleProps>;
};

export default Card;

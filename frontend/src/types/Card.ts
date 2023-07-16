export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export interface CardBodyProps {
  children: React.ReactNode;
}

export interface CardTextProps {
  children: React.ReactNode;
  className?: string;
  as?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

export interface CardTitleProps {
  children: React.ReactNode;
}

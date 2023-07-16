import { FormEvent, InputHTMLAttributes, ReactNode } from "react";
 
 export interface FormProps {
    children: ReactNode;
    className?: string;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  }
  
 export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
  }
  
export  interface FormGroupProps {
    children: ReactNode;
    className?: string;
  }
  
 export interface FormLabelProps {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
  }

  export interface FormCheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    id?: string;
    type?: "checkbox" | "radio";
  }
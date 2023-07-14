import { FC, FormEvent } from "react";
import classNames from "classnames";
import { FormControlProps, FormGroupProps, FormLabelProps, FormProps } from "../types/Form";



const Form: FormComponent = ({ className, onSubmit, children }) => {
  const formClass = classNames("form bg-gray-800 ", className);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.Control = function FormControl({ className, ...props }: FormControlProps) {
  const inputClass = classNames("form-input block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", className);
  return (
    <input {...props} className={`${inputClass} `} />
  );
};


Form.Group = function FormGroup({ className, children }: FormGroupProps) {
  const groupClass = classNames("form-group flex flex-col mb-4", className);
  return <div className={`${groupClass} rounded-md`}>{children}</div>;
};


Form.Label = function FormLabel({ className, htmlFor, children }: FormLabelProps) {
  const labelClass = classNames("form-label text-left mb-2 uppercase font-bold text-lg text-gray-500", className);
  return (
    <label className={labelClass} htmlFor={htmlFor}>
      {children}
    </label>
  );
};


type FormComponent = FC<FormProps> & {
  Control: FC<FormControlProps>;
  Group: FC<FormGroupProps>;
  Label: FC<FormLabelProps>;
};

export default Form;



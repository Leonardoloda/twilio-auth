import { FC } from "react";
import { FormFormTypes } from "twilio/lib/rest/verify/v2/form";

export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
  required?: boolean;
  type?: string;
}

export const FormInput: FC<FormInputProps> = ({
  name,
  value,
  label,
  onChange,
  placeholder,
  required = false,
  type = "text",
}) => {
  return (
    <div className="w-full mt-8 flex gap-4 flex-col">
      <label className="font-bold" htmlFor={name}>
        {label}:
      </label>
      <input
        className="border-indigo-900 bg-transparent border-b-2 w-full pl-1"
        type={type}
        name={name}
        id={name}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </div>
  );
};

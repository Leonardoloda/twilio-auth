import { FC, ReactNode } from "react";

export interface SubmitButtonProps {
  children: ReactNode;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  return (
    <button
      className="w-full bg-indigo-200 hover:bg-indigo-300 border-2 border-indigo-900 text-indigo-950 p-2 rounded mt-4"
      type="submit"
    >
      {children}
    </button>
  );
};

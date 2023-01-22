import type { HTMLInputTypeAttribute } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TInputVariants;
  label?: string;
  type?: HTMLInputTypeAttribute;
}

export type TInputVariants = "default" | "secondary";

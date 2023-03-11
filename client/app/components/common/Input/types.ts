import type { HTMLInputTypeAttribute } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: TInputVariants;
  label?: string;
  type?: HTMLInputTypeAttribute;
  containerClass?: HTMLDivElement["className"];
}

export type TInputVariants = "default" | "secondary";

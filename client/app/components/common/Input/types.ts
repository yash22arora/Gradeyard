import type { HTMLInputTypeAttribute } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: HTMLInputTypeAttribute;
}

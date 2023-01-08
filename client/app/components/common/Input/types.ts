import type { HTMLInputTypeAttribute } from "react";

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: HTMLInputTypeAttribute;
}

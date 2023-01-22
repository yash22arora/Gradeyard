import type { HTMLAttributes } from "react";

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[];
  variant?: TSelectVariant;
  disabled?: boolean;
}

export interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type TSelectVariant = "default" | "secondary";

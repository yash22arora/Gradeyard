import type { HTMLAttributes } from "react";

// create interface ILabelProps extending attributes for label element
export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

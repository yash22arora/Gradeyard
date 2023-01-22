import type { TFieldType } from "./types";

export const fieldTypes: { value: TFieldType; label: string }[] = [
  {
    value: "text",
    label: "Text",
  },
  {
    value: "number",
    label: "Number",
  },
  {
    value: "dropdown",
    label: "Dropdown",
  },
];

import type { TFieldListItem, TFieldType } from "./types";

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

export const DEFAULT_FIELDS: TFieldListItem[] = [
  {
    name: "Aesthetics",
    type: "number",
  },
  {
    name: "Uniqueness",
    type: "number",
  },
  {
    name: "Functionality",
    type: "number",
  },
  {
    name: "Usability",
    type: "number",
  },
  {
    name: "Remarks",
    type: "text",
  },
];

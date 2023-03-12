export type TStatusType =
  | "Active"
  | "Compiled"
  | "Draft"
  | "Pending"
  | "Marked"
  | "Unmarked";

export interface IStatusBadgeProps {
  status: TStatusType;
}

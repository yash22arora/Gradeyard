export type TStatusType = "Active" | "Compiled" | "Draft" | "Pending";

export interface IStatusBadgeProps {
  status: TStatusType;
}

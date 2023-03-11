import { TFieldListItem } from "~/components/create/types";

export interface IMarkingTableProps {
  fields: TFieldListItem[];
  teamName: string;
}

export interface IMarkingItemProps {
  field: TFieldListItem;
}

export interface IMarks {
  key: string;
  value: string | number;
}

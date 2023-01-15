import { HTMLAttributes } from "react";

export interface IListHeaderProps extends HTMLAttributes<HTMLDivElement> {
  headerFields: IHeaderField[];
}

export interface IListItemProps {
  item: { [key: string]: any };
  headerFields: IHeaderField[];
}

export interface IListProps {
  headerFields: IHeaderField[];
  data: any[];
}

export interface IHeaderField {
  name: string;
  label: string;
}

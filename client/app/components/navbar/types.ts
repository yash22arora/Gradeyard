export interface INavOption {
  name: string;
  path: string;
  id: string;
  hasData?: boolean;
}

export interface INavOptionProps {
  option: INavOption;
  key: string;
  isActive: boolean;
  data?: number | string;
}

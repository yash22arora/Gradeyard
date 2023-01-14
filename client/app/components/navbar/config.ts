import type { INavOption } from "./types";

export const NavOptions: INavOption[] = [
  {
    name: "Create",
    path: "/dashboard/create",
    id: "create",
    hasData: false,
  },
  {
    name: "Marksheets",
    path: "/dashboard/marksheets",
    id: "marksheets",
    hasData: true,
  },
  {
    name: "Results",
    path: "/dashboard/results",
    id: "results",
    hasData: true,
  },
];

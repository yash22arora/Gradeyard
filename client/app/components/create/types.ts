export type TFieldType = "text" | "number" | "dropdown" | "";

export type TFieldListItem = {
  name: string;
  type: TFieldType;
};

export type TTeamListItem = {
  teamName: string;
  projectUrl: string;
  teamLeaderName?: string;
  teamLeaderEmail?: string;
};

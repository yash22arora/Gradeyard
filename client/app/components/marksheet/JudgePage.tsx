import { useState } from "react";
import Button from "../common/Button";
import Label from "../common/Label/Label";
import Select from "../common/Select";
import Slate from "../common/Slate/Slate";
import { DEFAULT_FIELDS } from "../create/config";
import MarkingTable from "./MarkingTable/MarkingTable";
import { BiLink } from "react-icons/bi";

const JudgePage: React.FC = () => {
  const teamOptions = [
    {
      label: "Adwal",
      value: "adwal",
    },
    {
      label: "Error404",
      value: "error404",
    },
    {
      label: "Comders",
      value: "comders",
    },
    {
      label: "NeamTame",
      value: "neamtame",
    },
    {
      label: "Servatom",
      value: "servatom",
    },
  ];
  const [currentTeam, setCurrentTeam] = useState(teamOptions[0]);
  return (
    <>
      <div className="flex flex-row items-center mt-4 mb-0">
        <Select
          value={currentTeam.value}
          options={teamOptions}
          className="w-64"
          onChange={(e) => {
            const cTeam =
              teamOptions.find((team) => {
                return team.value == e.currentTarget.value;
              }) || teamOptions[0];
            setCurrentTeam(cTeam);
          }}
        />
        <div className="flex flex-row items-center ml-auto">
          <span className="text-base text-on-surface-variant.light font-light mr-4">
            Currently active team :{" "}
            <span className="font-semibold">Active Team Name</span>
          </span>
          <Button className="m-0">Select Active Team</Button>
        </div>
      </div>
      <span className="text-sm text-on-surface-variant.light mt-4 font-light">
        You are currently reviewing team{" "}
        <span className="font-semibold">{currentTeam.label}</span>.
      </span>
      <div className="flex flex-row mt-6">
        <div className="w-full mr-32">
          <MarkingTable fields={DEFAULT_FIELDS} teamName={currentTeam.value} />
        </div>
        <Slate className="w-1/2 h-min">
          <div className="p-4 flex flex-col">
            <div className="flex flex-col">
              <Label>Team Leader</Label>
              <span className="text-xl font-semibold mt-2">
                Yashvardhan Arora
              </span>
            </div>

            <div className="flex flex-col mt-8">
              <Label>Project Name</Label>
              <span className="text-xl font-semibold mt-2">Gradeyard</span>
            </div>

            <div className="flex flex-col mt-8 ">
              <Label>Team Submission</Label>
              <a
                href="https://notefy.servatom.com"
                target={"_blank"}
                rel={"noreferrer"}
                className="flex flex-row items-center gap-2 justify-start text-xl font-semibold mt-2 text-primary.light"
              >
                <BiLink />
                <span className="truncate w-64">
                  {"https://notefy.servatom.com"}
                </span>
              </a>
            </div>
          </div>
        </Slate>
      </div>
      <div className="flex flex-row items-center mt-16 ml-auto justify-end w-1/2 gap-8">
        <Button
          variant="primary"
          className="bg-tertiary-container.light text-on-tertiary-container.light"
        >
          Flag Team
        </Button>
        <Button>Save Review</Button>
      </div>
    </>
  );
};

export default JudgePage;

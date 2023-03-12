import { BiLink } from "react-icons/bi";
import Button from "../common/Button";
import Label from "../common/Label/Label";
import Slate from "../common/Slate/Slate";
import StatusBadge from "../common/StatusBadge/StatusBadge";
import { TStatusType } from "../common/StatusBadge/types";
import Title from "../common/Title/Title";
import { dummyHeaderFields, organiserTeamList } from "./config";

const OrganiserPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-start justify-between mt-4 mb-0">
        <div className="w-3/4 mr-16">
          <div className="flex flex-row px-4 py-3 my-2 mb-4 bg-inverse-surface.light bg-opacity-14 justify-start items-center">
            {dummyHeaderFields.map((field) => (
              <div
                key={field.name}
                className={
                  "text-base px-3 mr-40 first:mr-3 font-normal text-on-surface-variant.light "
                }
              >
                {field.label}
              </div>
            ))}
          </div>
          <div>
            {organiserTeamList.map((team) => {
              return (
                <div
                  key={team.index}
                  className="flex flex-row gap-4 p-2 mx-4 my-4 items-center"
                >
                  <span className="text-base w-8 font-normal text-on-surface-variant.light border-r-2 border-on-surface-variant.light border-opacity-20">
                    {team.index}
                  </span>
                  <span className="text-base w-64 font-normal text-on-surface-variant.light border-r-2 border-on-surface-variant.light border-opacity-20">
                    {team.name}
                  </span>
                  <span className="text-base w-64 font-normal text-on-surface-variant.light ">
                    <StatusBadge status={team.status as TStatusType} />
                  </span>
                  <div className="grow">
                    <Button
                      className="m-0 my-0 grow py-2 px-4 text-base"
                      key={team.index}
                      disabled={team.status == "Active"}
                    >
                      Set team active
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <Slate className="h-min">
            <div className="p-4 flex flex-col">
              <div className="flex flex-col">
                <Label>Judges</Label>
                <span className="text-xl font-semibold mt-2">
                  <ol className="list-decimal list-inside">
                    <li className="list-item">Ansh Mehra</li>
                    <li className="list-item">Saptarishi Prakash</li>
                  </ol>
                </span>
              </div>

              <div className="flex flex-col mt-8 ">
                <Label>Stream Link</Label>
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
      </div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <Title size="h3">
          Marked : <span className="text-primary.light">2</span> / 5
        </Title>
        <div>
          <Button>Compile Results</Button>
        </div>
      </div>
    </>
  );
};

export default OrganiserPage;

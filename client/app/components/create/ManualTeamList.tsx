import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Input from "../common/Input";
import { TFieldListItem, TFieldType, TTeamListItem } from "./types";
import { FaTrash } from "react-icons/fa";

const ManualTeamList: React.FC = () => {
  const [fields, setFields] = useState<TTeamListItem[]>([]);
  const addFieldHandler = () => {
    setFields((prev) => [
      ...prev,
      {
        teamName: "",
        projectUrl: "",
      },
    ]);
  };
  const removeFieldHandler = (idx: number) => {
    setFields((prev) => {
      const newFields = [...prev];
      newFields.splice(idx, 1);
      return newFields;
    });
  };
  const fieldChangeHandler = (
    idx: number,
    value: string,
    field: "teamName" | "projectUrl"
  ) => {
    if (field === "teamName")
      setFields((prev) => {
        const newFields = [...prev];
        newFields[idx].teamName = value;
        return newFields;
      });
    else if (field === "projectUrl")
      setFields((prev) => {
        const newFields = [...prev];
        newFields[idx].projectUrl = value as TFieldType;
        return newFields;
      });
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <>
      {fields.map((field, idx) => (
        <div
          className="flex w-full flex-row justify-between items-center"
          key={idx}
        >
          <Input
            placeholder={"Team " + (idx + 1)}
            value={field.teamName}
            onChange={(e) => {
              fieldChangeHandler(idx, e.target.value, "teamName");
            }}
          />
          <Input
            placeholder={"Project Link "}
            value={field.projectUrl}
            containerClass={"ml-8"}
            onChange={(e) => {
              fieldChangeHandler(idx, e.target.value, "projectUrl");
            }}
          />
          <span
            onClick={() => removeFieldHandler(idx)}
            className="ml-4 p-2 opacity-20 cursor-pointer hover:opacity-60 hover:text-on-error-container.light"
          >
            <FaTrash />
          </span>
        </div>
      ))}
      <div
        onClick={addFieldHandler}
        className="w-full flex flex-row items-center justify-center mt-4 p-4 cursor-pointer hover:bg-outline.light hover:bg-opacity-8 text-outline.light"
      >
        <BsPlusLg size={14} />
        <span className="ml-4 leading-none ">Add Team</span>
      </div>
    </>
  );
};

export default ManualTeamList;

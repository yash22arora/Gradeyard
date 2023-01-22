import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Input from "../common/Input";
import Select from "../common/Select";
import { fieldTypes as options } from "./config";
import { TFieldType } from "./types";

const FieldsList: React.FC = () => {
  const [fields, setFields] = useState<
    {
      name: string;
      type: TFieldType;
    }[]
  >([
    {
      name: "Field 1",
      type: "text",
    },
    {
      name: "Field 2",
      type: "number",
    },
  ]);
  const addFieldHandler = () => {
    setFields((prev) => [
      ...prev,
      {
        name: "Field " + (prev.length + 1),
        type: "number",
      },
    ]);
  };
  const fieldChangeHandler = (
    idx: number,
    value: string,
    field: "name" | "type"
  ) => {
    if (field === "name")
      setFields((prev) => {
        const newFields = [...prev];
        newFields[idx].name = value;
        return newFields;
      });
    else if (field === "type")
      setFields((prev) => {
        const newFields = [...prev];
        newFields[idx].type = value as TFieldType;
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
            placeholder={field.name}
            value={field.name}
            onChange={(e) => {
              fieldChangeHandler(idx, e.target.value, "name");
            }}
          />
          <Select
            value={field.type}
            options={options}
            className="ml-8"
            onChange={(e) => {
              fieldChangeHandler(idx, e.currentTarget.value, "type");
            }}
          />
        </div>
      ))}
      <div
        onClick={addFieldHandler}
        className="w-full flex flex-row items-center justify-center mt-4 p-4 cursor-pointer hover:bg-outline.light hover:bg-opacity-8"
      >
        <BsPlusLg size={14} />
        <span className="ml-4 leading-none">Add Field</span>
      </div>
    </>
  );
};

export default FieldsList;

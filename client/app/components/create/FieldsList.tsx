import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Input from "../common/Input";
import Select from "../common/Select";
import { DEFAULT_FIELDS, fieldTypes as options } from "./config";
import { TFieldListItem, TFieldType } from "./types";
import { FaTrash } from "react-icons/fa";

const FieldsList: React.FC = () => {
  const [fields, setFields] = useState<TFieldListItem[]>(DEFAULT_FIELDS);
  const addFieldHandler = () => {
    setFields((prev) => [
      ...prev,
      {
        name: "",
        type: "number",
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
            placeholder={"Field " + (idx + 1)}
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
        <span className="ml-4 leading-none ">Add Field</span>
      </div>
    </>
  );
};

export default FieldsList;

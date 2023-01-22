import { BsPlusLg } from "react-icons/bs";
import Input from "../common/Input";
import Select from "../common/Select";
import { fieldTypes as options } from "./config";

const FieldsList: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-row justify-between items-center">
        <Input placeholder="Field Name" />
        <Select options={options} className="ml-8" />
      </div>
      <div className="w-full flex flex-row items-center justify-center mt-4 p-4 cursor-pointer hover:bg-outline.light hover:bg-opacity-8">
        <BsPlusLg size={14} />
        <span className="ml-4 leading-none">Add Field</span>
      </div>
    </>
  );
};

export default FieldsList;

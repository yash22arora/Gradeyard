import Input from "~/components/common/Input";
import Select from "~/components/common/Select";
import { TFieldListItem } from "~/components/create/types";
import { IMarkingItemProps } from "./types";

const MarkingItem: React.FC<IMarkingItemProps> = (props) => {
  const { field } = props;

  const getInputElement = (field: TFieldListItem) => {
    if (field.type == "text" || field.type == "number") {
      return <Input type={field.type} />;
    } else {
      const dropDownOptions = field.options!.map((option) => ({
        label: option,
        value: option,
      }));
      return <Select options={dropDownOptions} />;
    }
  };

  return (
    <div className="grid grid-cols-2 justify-start items-center w-full">
      <span className="text-xl font-medium">{field.name} : </span>
      {getInputElement(field)}
    </div>
  );
};

export default MarkingItem;

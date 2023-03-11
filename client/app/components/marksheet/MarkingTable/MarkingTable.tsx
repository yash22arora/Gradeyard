import MarkingItem from "./MarkingTableItem";
import { IMarkingTableProps } from "./types";

const MarkingTable: React.FC<IMarkingTableProps> = (props) => {
  const { fields, teamName } = props;
  return (
    <div className="flex flex-col">
      {fields.map((field, idx) => (
        <MarkingItem field={field} key={idx} />
      ))}
    </div>
  );
};

export default MarkingTable;

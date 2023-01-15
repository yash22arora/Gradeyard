import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import { IListProps } from "./types";

const List: React.FC<IListProps> = ({ headerFields, data }) => {
  return (
    <div className="w-full flex flex-col my-6">
      <ListHeader headerFields={headerFields} />
      {data.map((item: {}, index) => (
        <ListItem item={item} key={index} headerFields={headerFields} />
      ))}
    </div>
  );
};

export default List;

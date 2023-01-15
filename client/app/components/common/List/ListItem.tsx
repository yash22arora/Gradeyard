import Slate from "../Slate/Slate";
import { IListItemProps } from "./types";
import { IoIosArrowForward } from "react-icons/io";

const ListItem: React.FC<IListItemProps> = ({ item, headerFields }) => {
  return (
    <Slate className="cursor-pointer my-3">
      <div className="flex flex-row justify-between items-center w-full py-1">
        <div className="flex flex-row items-center">
          {headerFields.map((field, index) => (
            <div
              key={index}
              className="text-base px-3 mr-5 first:mr-3 font-normal text-on-surface-variant.light"
            >
              {item[field.name]}
            </div>
          ))}
        </div>
        <IoIosArrowForward size={24} />
      </div>
    </Slate>
  );
};

export default ListItem;

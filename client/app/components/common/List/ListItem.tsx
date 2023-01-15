import Slate from "../Slate/Slate";
import { IListItemProps } from "./types";
import { IoIosArrowForward } from "react-icons/io";
import StatusBadge from "../StatusBadge/StatusBadge";

const ListItem: React.FC<IListItemProps> = ({ item, headerFields }) => {
  return (
    <Slate className="cursor-pointer my-3 hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-row justify-between items-center w-full py-1 px-2">
        <div className="flex flex-row items-center">
          {headerFields.map((field, index) => {
            return field.name === "status" ? (
              <div>
                <StatusBadge status={item[field.name]} />
              </div>
            ) : (
              <div
                key={index}
                className="text-base pr-8 mr-5 first:mr-3 first:pr-3 font-normal text-on-surface-variant.light border-r-2 border-on-surface-variant.light border-opacity-20"
              >
                {item[field.name]}
              </div>
            );
          })}
        </div>
        <IoIosArrowForward size={24} />
      </div>
    </Slate>
  );
};

export default ListItem;

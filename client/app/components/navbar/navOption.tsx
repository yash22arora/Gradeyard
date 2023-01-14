import { Link } from "react-router-dom";
import { INavOption, INavOptionProps } from "./types";

const NavOption: React.FC<INavOptionProps> = ({
  option,
  key,
  isActive,
  data,
}) => {
  const activeClass = isActive
    ? "bg-primary.light text-white"
    : "text-on-surface-variant.light";
  const hoverClass = isActive
    ? ""
    : "hover:bg-primary.light hover:bg-opacity-10 hover:text-primary.light";
  const dataClass = isActive ? "" : "text-white navDataText";

  return (
    <Link
      to={option.path}
      key={option.id}
      className={`h-full flex flex-col flex-grow px-6 mx-2 pt-12 pb-6 rounded-b-lg font-semibold ${hoverClass} ${activeClass} navLink`}
    >
      {option.name}
      {option.hasData ? (
        <span className={`text-sm font-normal ${dataClass} `}>{data}</span>
      ) : (
        <span className={`text-sm invisible`}>.</span>
      )}
    </Link>
  );
};

export default NavOption;

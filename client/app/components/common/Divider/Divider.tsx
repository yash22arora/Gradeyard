import { IDividerProps } from "./types";

const Divider: React.FC<IDividerProps> = (props) => {
  const { label } = props;
  return (
    <div className="w-full flex items-center justify-center text-outline.light my-4 mx-2">
      <hr className="w-full bg-outline.light h-[2px]"></hr>
      {label ? (
        <span className="absolute px-1 bg-white text-sm">
          {label.toLocaleUpperCase()}
        </span>
      ) : null}
    </div>
  );
};

export default Divider;

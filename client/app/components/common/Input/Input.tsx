import type { IInputProps } from "./types";

const Input: React.FC<IInputProps> = (props) => {
  const { label, type } = props;
  return (
    <div className="w-full my-4">
      {label ? (
        <span className="text-on-surface.light text-xs font-light">
          {label.toUpperCase()}
        </span>
      ) : null}{" "}
      <input
        type={type}
        className="mt-1 outline outline-[1.5px] outline-outline.light text-outline.light focus:outline-2 w-full rounded-sm text-lg bg-white p-2"
      />
    </div>
  );
};

export default Input;

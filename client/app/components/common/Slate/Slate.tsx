import type { ISlateProps } from "./types";

const InputContainer: React.FC<ISlateProps> = (props) => {
  const { shadow = true, className = "" } = props;
  const shadowClass = shadow ? "slateShadow" : "";
  return (
    <div
      className={`bg-white p-12 py-8 my-4 w-full rounded-md flex flex-col items-center justify-center ${shadowClass} ${className}`}
    >
      {props.children}
    </div>
  );
};

export default InputContainer;

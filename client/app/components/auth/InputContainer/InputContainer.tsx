import { IInputContainerProps } from "./types";

const InputContainer: React.FC<IInputContainerProps> = (props) => {
  return (
    <div className="bg-inverse-on-surface.light p-12 py-8 my-4 w-full rounded-md flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
};

export default InputContainer;

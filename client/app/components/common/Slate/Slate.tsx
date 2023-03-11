import type { ISlateProps } from "./types";

const Slate: React.FC<ISlateProps> = (props) => {
  const { shadow = true, className = "", ...rest } = props;
  const shadowClass = shadow ? "slateShadow" : "";
  return (
    <div
      {...rest}
      className={`bg-white p-4 py-3 my-4 w-full rounded-md ${shadowClass} ${className}`}
    >
      {props.children}
    </div>
  );
};

export default Slate;

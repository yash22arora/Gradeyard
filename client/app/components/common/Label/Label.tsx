import type { ILabelProps } from "./types";

const Label: React.FC<ILabelProps> = (props) => {
  const { children, htmlFor = "", ...rest } = props;
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className={` text-on-surface-variant.light text-xs font-light ${rest.className}`}
    >
      {(children as string).toUpperCase()}
    </label>
  );
};

export default Label;

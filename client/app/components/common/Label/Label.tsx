import type { ILabelProps } from "./types";

const Label: React.FC<ILabelProps> = ({ children, ...rest }) => {
  return (
    <label
      {...rest}
      className={` text-on-surface-variant.light text-xs font-light ${rest.className}`}
    >
      {(children as string).toUpperCase()}
    </label>
  );
};

export default Label;

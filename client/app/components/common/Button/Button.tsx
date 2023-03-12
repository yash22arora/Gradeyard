import type { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (props) => {
  const { variant, onClick, children, disabled = false, ...rest } = props;
  const disabledClass = disabled
    ? "cursor-not-allowed bg-inverse-surface.light bg-opacity-40"
    : "bg-primary.light";
  return (
    <button
      {...rest}
      disabled={disabled}
      className={
        " p-2 m-2 my-4 rounded-sm w-full text-center text-on-primary.light text-xl font-medium " +
        disabledClass +
        " " +
        props.className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

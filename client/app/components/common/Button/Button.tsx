import type { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (props) => {
  const { variant, onClick, children, ...rest } = props;
  return (
    <button
      {...rest}
      className={
        "bg-primary.light p-2 m-2 my-4 rounded-sm w-full text-center text-on-primary.light text-xl font-medium " +
        props.className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

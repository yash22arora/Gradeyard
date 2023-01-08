import type { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (props) => {
  const { variant, onClick, children } = props;
  return (
    <button
      className="bg-primary.light p-2 m-2 my-4 rounded-sm w-full text-center text-on-primary.light text-xl font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

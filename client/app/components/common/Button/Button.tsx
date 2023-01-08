import type { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (props) => {
  const { variant, onClick, children } = props;
  return (
    <button
      className="bg-primary.light p-4 w-full text-center text-on-primary.light"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

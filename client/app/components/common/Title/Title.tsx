import { ITitleProps } from "./types";

const Title: React.FC<ITitleProps> = (props) => {
  const { size = "h1", children, className, ...rest } = props;

  const getTextSizeClass = () => {
    switch (size) {
      case "h1":
        return "text-4xl font-extrabold";
      case "h2":
        return "text-3xl font-bold";
      case "h3":
        return "text-2xl font-bold";
      case "h4":
        return "text-xl font-bold";
      case "h5":
        return "text-lg font-bold";
      case "h6":
        return "text-base font-bold";
      default:
        return "text-lg";
    }
  };
  return (
    <span
      className={`${getTextSizeClass()} text-on-background.light ${className}`}
    >
      {children}
    </span>
  );
};

export default Title;

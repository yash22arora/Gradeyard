import type { IInputProps } from "./types";

const Input: React.FC<IInputProps> = (props) => {
  const { variant = "default", label, type, disabled, ...rest } = props;
  const disabledClass = disabled
    ? "bg-on-tertiary-container.light bg-opacity-12"
    : "";
  const variantClass =
    variant === "default"
      ? "outline-[#191C1C29] bg-[#CCE8E614] text-on-surface-variant.light"
      : "outline-outline.light text-outline.light bg-white";
  return (
    <div className="w-full my-4">
      {label ? (
        <span className="text-on-surface.light text-xs font-light">
          {label.toUpperCase()}
        </span>
      ) : null}{" "}
      <input
        type={type}
        className={`mt-1 outline outline-[1.5px] focus:outline-2 w-full rounded-sm text-lg p-2 ${variantClass}  ${disabledClass}`}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Input;

import type { ISelectProps } from "./types";

const Select: React.FC<ISelectProps> = (props) => {
  const { options, variant = "default", ...rest } = props;
  const disabledClass = rest.disabled
    ? "bg-on-tertiary-container.light bg-opacity-12"
    : "";
  const variantClass =
    variant === "default"
      ? "outline-[#191C1C29] bg-[#CCE8E614] text-on-surface-variant.light"
      : "outline-outline.light text-outline.light bg-white";
  return (
    <select
      disabled={rest.disabled}
      className={`mt-1 outline outline-[1.5px] focus:outline-2 w-full rounded-sm text-lg p-2 ${variantClass}  ${disabledClass} ${rest.className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

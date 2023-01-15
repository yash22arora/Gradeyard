import { IStatusBadgeProps } from "./types";

const StatusBadge: React.FC<IStatusBadgeProps> = ({ status }) => {
  let colorClass: string = "";
  switch (status) {
    case "Active":
      colorClass = "bg-tertiary-container.light";
      break;
    case "Compiled":
      colorClass = "bg-inverse-primary.light bg-opacity-50";
      break;
    case "Pending":
      colorClass = "bg-error.light bg-opacity-40";
      break;
    case "Draft":
      colorClass = "bg-inverse-surface.light bg-opacity-20";
      break;
    default:
      colorClass = "bg-inverse-surface.light bg-opacity-20";
      break;
  }
  return (
    <span
      className={` text-on-primary-container.light font-medium text-opacity-70 text-xs px-4 py-1 rounded-full ${colorClass} `}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;

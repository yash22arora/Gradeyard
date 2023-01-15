import { IListHeaderProps } from "./types";

const ListHeader: React.FC<IListHeaderProps> = ({ headerFields, ...rest }) => {
  return (
    <div className="flex flex-row px-4 py-3 my-2 mb-4 bg-inverse-surface.light bg-opacity-14 justify-start items-center">
      {headerFields.map((field) => (
        <div
          key={field.name}
          {...rest}
          className={
            "text-base px-3 mr-16 first:mr-3 font-normal text-on-surface-variant.light " +
            rest.className
          }
        >
          {field.label}
        </div>
      ))}
    </div>
  );
};

export default ListHeader;

import { IoChevronBackSharp } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import Title from "~/components/common/Title/Title";

const MarksheetPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row items-center mb-12 cursor-pointer text-primary.light font-medium"
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="mr-4 -ml-2 ">
          <IoChevronBackSharp size={20} />
        </div>
        <span>Save & go back</span>
      </div>
      <Title size="h1" className="mb-6">
        Marksheet Name
      </Title>
      <Outlet />
    </div>
  );
};

export default MarksheetPage;

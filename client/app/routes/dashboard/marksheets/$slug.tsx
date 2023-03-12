import { IoChevronBackSharp } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "~/components/common/Button";
import Title from "~/components/common/Title/Title";

const MarksheetPage = () => {
  const navigate = useNavigate();
  const isJudge = false;
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
      <div className="flex flex-row items-center justify-between mb-6">
        <Title size="h1" className="">
          Marksheet Name
        </Title>
        {!isJudge && (
          <div>
            <Button className="bg-secondary.light">Convert to Draft</Button>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default MarksheetPage;

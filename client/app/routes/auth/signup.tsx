import { Outlet } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/3 min-w-[400px]">
        <Outlet />
        <span className="text-on-background.light mt-6 tracking-wide">
          Already have an account? Log in{" "}
          <a className="text-primary.light" href="/auth/login">
            here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Signup;

import { Outlet } from "react-router-dom";
import Navbar from "~/components/navbar/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="px-12 py-16 w-full h-full flex flex-col items-center justify-start">
        <div className="max-w-7xl w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

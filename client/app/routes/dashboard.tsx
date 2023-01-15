import { Outlet } from "react-router-dom";
import Navbar from "~/components/navbar/navbar";

const Dashboard = () => {
  return (
    <div className="h-full overflow-auto">
      <Navbar />
      <div className="px-12 pt-16 pb-10 w-full flex flex-col items-center justify-start">
        <div className="max-w-6xl w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

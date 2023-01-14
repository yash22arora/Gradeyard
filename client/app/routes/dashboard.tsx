import { Outlet } from "react-router-dom";
import Navbar from "~/components/navbar/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Dashboard;

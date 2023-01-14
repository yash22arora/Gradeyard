import { Link } from "@remix-run/react";
import Button from "~/components/common/Button";

export default function Index() {
  return (
    <div className="bg-background.light p-8 grid grid-cols-4 gap-1">
      <Link to={"/auth/login"}>Login</Link>
      <Link to={"/dashboard/marksheets"}>Dashboard</Link>
    </div>
  );
}

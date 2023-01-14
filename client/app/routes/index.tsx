import { Link } from "@remix-run/react";
import Button from "~/components/common/Button";

export default function Index() {
  return (
    <div className="bg-background.light p-8">
      <Link to={"/auth/login"}>Login</Link>
    </div>
  );
}

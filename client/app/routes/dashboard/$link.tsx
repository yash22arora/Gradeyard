import { Navigate, useParams } from "react-router-dom";

const UnhandledLink = () => {
  return (
    <div>
      {useParams().link}
      <Navigate to="/dashboard/marksheets" />
    </div>
  );
};

export default UnhandledLink;

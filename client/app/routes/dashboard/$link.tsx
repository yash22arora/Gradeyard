import { useParams } from "react-router-dom";

const UnhandledLink = () => {
  return <div>{useParams().link}</div>;
};

export default UnhandledLink;

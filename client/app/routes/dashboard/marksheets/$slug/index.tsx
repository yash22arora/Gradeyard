import JudgePage from "~/components/marksheet/JudgePage";
import OrganiserPage from "~/components/marksheet/OrganiserPage";

const MarksheetPage = () => {
  const isJudge = false;
  if (isJudge) return <JudgePage />;
  else return <OrganiserPage />;
};

export default MarksheetPage;

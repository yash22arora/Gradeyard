import { useAtom } from "jotai";
import { isJudgeAtom } from "~/atoms";
import JudgePage from "~/components/marksheet/JudgePage";
import OrganiserPage from "~/components/marksheet/OrganiserPage";

const MarksheetPage = () => {
  const [isJudge, setIsJudge] = useAtom(isJudgeAtom);
  if (isJudge) return <JudgePage />;
  else return <OrganiserPage />;
};

export default MarksheetPage;

import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "~/components/common/Button";
import Label from "~/components/common/Label/Label";
import Select from "~/components/common/Select";
import Title from "~/components/common/Title/Title";
import JudgePage from "~/components/marksheet/JudgePage";

const MarksheetPage = () => {
  const isJudge = true;
  if (isJudge) return <JudgePage />;
  else return null;
};

export default MarksheetPage;

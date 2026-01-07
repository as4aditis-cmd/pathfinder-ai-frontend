import { useState } from "react";
import CareerForm from "../Components/CareerForm";
import ResultCard from "../Components/ResultCard";
import { analyzeSkillGap } from "../Services/skillGapApi";

function SkillGapPage() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (career, skills) => {
    const response = await analyzeSkillGap(career, skills);
    setResult(response);
  };

  return (
    <>
      <CareerForm onSubmit={handleSubmit} />
      <ResultCard result={result} />
    </>
  );
}

export default SkillGapPage;

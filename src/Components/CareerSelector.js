import { analyzeSkillGap } from "../Services/skillGapApi";
import { useEffect } from "react";

function CareerSelector() {

  useEffect(() => {
    async function fetchData() {
      const result = await analyzeSkillGap(
        "Data Analyst",
        ["Excel", "Python"]
      );
      console.log("Backend response:", result);
    }

    fetchData();
  }, []);

  return <div>Career Selector</div>;
}

export default CareerSelector;

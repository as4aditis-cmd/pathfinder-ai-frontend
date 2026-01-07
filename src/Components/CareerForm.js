import { useState } from "react";
import { formatSkills } from "../utils/formatSkills";

const skillsArray = formatSkills(skills);


function CareerForm({ onSubmit }) {
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const skillsArray = skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    onSubmit(career, skillsArray);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>Skill Gap Analyzer</h2>

      <input
        type="text"
        placeholder="Target Career (e.g. Data Analyst)"
        value={career}
        onChange={(e) => setCareer(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Your Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button type="submit">Analyze</button>
    </form>
  );
}

export default CareerForm;

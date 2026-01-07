import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeSkillGap } from "../Services/skillGapApi";

const CareerDiscovery = () => {
  const [career, setCareer] = useState("Data Analyst");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!skills.trim()) {
      alert("Please enter your skills");
      return;
    }

    setLoading(true);

    // ✅ Normalize user-entered skills (case-insensitive)
    const userSkills = skills
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    try {
      const result = await analyzeSkillGap(career, userSkills);

      // ✅ PASS userSkills explicitly
      navigate("/results", {
        state: {
          career,
          level: result.level,
          missing_skills: result.missing_skills,
          userSkills, // 🔥 THIS FIXES THE ISSUE
        },
      });
    } catch (err) {
      alert("Failed to analyze skills");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="discovery-page">
      <div className="discovery-card">
        <h1>Career Discovery</h1>
        <p className="subtitle">
          Tell us what you know — we’ll guide your next step 🚀
        </p>

        <label>Choose Career</label>
        <select value={career} onChange={(e) => setCareer(e.target.value)}>
          <option>Data Analyst</option>
          <option>Frontend Developer</option>
        </select>

        <label>Your Skills (comma separated)</label>
        <textarea
          placeholder="Excel, Python, SQL"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Analyzing..." : "Find My Career Path"}
        </button>
      </div>
    </div>
  );
};

export default CareerDiscovery;

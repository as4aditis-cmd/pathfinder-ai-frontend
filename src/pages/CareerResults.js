import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CareerResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="results-page">
        <div className="results-card">
          <h2>No data found</h2>
          <button onClick={() => navigate("/discover")}>Go Back</button>
        </div>
      </div>
    );
  }

  // ✅ Normalize user-entered skills
  const userSkills = (state.userSkills || [])
    .map(skill => skill.toLowerCase().trim());

  // ✅ Remove skills user already has (case-insensitive)
  const filteredMissingSkills = (state.missing_skills || []).filter(
    skill => !userSkills.includes(skill.toLowerCase().trim())
  );

  return (
    <div className="results-page">
      <div className="results-card">
        <h1>Career Analysis Result</h1>

        <div className="summary">
          <p>
            <strong>Career:</strong> {state.career}
          </p>
          <p>
            <strong>Level:</strong>{" "}
            <span className={`level ${state.level.toLowerCase()}`}>
              {state.level}
            </span>
          </p>
        </div>

        <div className="skills-box">
          <h3>Missing Skills</h3>

          {filteredMissingSkills.length === 0 ? (
            <p className="success">
              🎉 You already have all required skills!
            </p>
          ) : (
            <ul>
              {filteredMissingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="actions">
          <button onClick={() => navigate("/discover")}>
            Analyze Again
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate("/learning-path", {
                state: {
                  career: state.career,
                  level: state.level,
                  missing_skills: filteredMissingSkills,
                },
              })
            }
          >
            Start Learning Path
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerResults;

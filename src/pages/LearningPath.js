import { useLocation, useNavigate } from "react-router-dom";

const resourceMap = {
  "Frontend Developer": {
    beginner: [
      "HTML & CSS – MDN Web Docs",
      "JavaScript Basics – freeCodeCamp",
    ],
    intermediate: [
      "React Fundamentals – React Docs",
      "JavaScript ES6+ – freeCodeCamp",
    ],
    advanced: [
      "Performance Optimization",
      "System Design for Frontend",
    ],
  },

  "Data Analyst": {
    beginner: [
      "Python Basics – Kaggle",
      "Excel for Data Analysis",
    ],
    intermediate: [
      "SQL Queries – Mode SQL Tutorial",
      "Statistics for Data Analysis",
    ],
    advanced: [
      "Data Visualization (Power BI / Tableau)",
      "Real-world Data Projects",
    ],
  },
};

const LearningPath = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.career) {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        <h2>No learning path data found</h2>
        <button onClick={() => navigate("/discover")}>Go Back</button>
      </div>
    );
  }

  const roadmap = resourceMap[state.career];

  // ✅ SAVE TO DASHBOARD
  const handleSaveLearningPath = () => {
    const savedPaths =
      JSON.parse(localStorage.getItem("savedLearningPaths")) || [];

    const alreadyExists = savedPaths.find(
      (item) => item.career === state.career
    );

    if (!alreadyExists) {
      savedPaths.push({
        career: state.career,
        progress: 0, // start with 0%
      });

      localStorage.setItem(
        "savedLearningPaths",
        JSON.stringify(savedPaths)
      );
    }

    navigate("/dashboard");
  };

  return (
    <div className="results-page">
      <div className="results-card">
        <h1>{state.career} Learning Path</h1>

        <p className="subtitle">
          Personalized roadmap based on your skill gaps
        </p>

        {/* Missing Skills */}
        {state.missing_skills?.length > 0 && (
          <>
            <h3>Skills You Need to Learn</h3>
            <ul>
              {state.missing_skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </>
        )}

        {/* Roadmap */}
        {roadmap && (
          <>
            <h3>Beginner</h3>
            <ul>
              {roadmap.beginner.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>Intermediate</h3>
            <ul>
              {roadmap.intermediate.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>Advanced</h3>
            <ul>
              {roadmap.advanced.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="button-group">
          <button onClick={() => navigate("/discover")}>
            Analyze Again
          </button>
          &emsp;
          <button className="secondary-btn" onClick={() => {const existing = JSON.parse(localStorage.getItem("savedLearningPaths")) || [];

          const alreadyExists = existing.find((p) => p.career === state.career);

          let updated;

          if (alreadyExists) {alert("This learning path is already saved in Dashboard.");
            return;}

            const choice = window.confirm("Do you want to REPLACE your previous learning path?\n\nOK = Replace\nCancel = Add alongside");
            if (choice) {
                // Replace old paths
                updated = [{ ...state, id: Date.now() }];}
            else {
                // Add alongside
                updated = [...existing, { ...state, id: Date.now() }];}

                localStorage.setItem("savedLearningPaths",
                JSON.stringify(updated)
            );
            alert("Learning path saved successfully in Dashboard!");}}>
                Save Learning Path
          </button>

        </div>
      </div>
    </div>
  );
};

export default LearningPath;

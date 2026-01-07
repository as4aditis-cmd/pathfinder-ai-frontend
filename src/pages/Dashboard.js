import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SKILL_MAP = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React"],
  "Data Analyst": ["Python", "Excel", "SQL", "Statistics"],
};

const RESOURCE_MAP = {
  "Frontend Developer": {
    videos: [
      "https://www.youtube.com/@TraversyMedia",
      "https://www.youtube.com/@freecodecamp",
    ],
    docs: [
      "https://developer.mozilla.org",
      "https://react.dev",
    ],
    websites: [
      "https://frontendmasters.com",
      "https://css-tricks.com",
    ],
    tools: [
      "VS Code",
      "Chrome DevTools",
      "GitHub",
    ],
  },

  "Data Analyst": {
    videos: [
      "https://www.youtube.com/@AlexTheAnalyst",
      "https://www.youtube.com/@freecodecamp",
    ],
    docs: [
      "https://pandas.pydata.org/docs/",
      "https://numpy.org/doc/",
    ],
    websites: [
      "https://kaggle.com",
      "https://mode.com/sql-tutorial/",
    ],
    tools: [
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [savedPaths, setSavedPaths] = useState([]);
  const [completedSkills, setCompletedSkills] = useState({});
  const [resourceType, setResourceType] = useState("videos");

  useEffect(() => {
    const paths = JSON.parse(
      localStorage.getItem("savedLearningPaths") || "[]"
    );
    setSavedPaths(paths);

    const skills = JSON.parse(
      localStorage.getItem("completedSkills") || "{}"
    );
    setCompletedSkills(skills);
  }, []);

  const getProgress = (career) => {
    const total = SKILL_MAP[career]?.length || 0;
    const done = completedSkills[career]?.length || 0;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const activeCareer = savedPaths[0]?.career;

  return (
    <div className="dashboard">

      {/* ================= LEARNING PROGRESS ================= */}
      {savedPaths.length > 0 && (
        <section className="section">
          <h2 className="section-title">My Learning Progress</h2>

          {savedPaths.map((path) => (
            <div key={path.id} className="task-card">
              <h3>{path.career}</h3>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${getProgress(path.career)}%` }}
                />
              </div>

              <p>{getProgress(path.career)}% completed</p>

              <button
                className="start-btn"
                onClick={() =>
                  navigate("/learning-path", { state: path })
                }
              >
                Continue Learning
              </button>

              &emsp;

              <button className="secondary-btn" onClick={() => { const updated = savedPaths.filter( (p) => p.career !== path.career );
              localStorage.setItem("savedLearningPaths", JSON.stringify(updated));
              setSavedPaths(updated);}}>
                Remove
              </button>

            </div>
          ))}
        </section>
      )}

      {/* ================= SKILL TRACKER ================= */}
      <section className="section">
        <h2 className="section-title">Skill Tracker</h2>
        {savedPaths.map((path) => (
          <div key={path.career} className="task-card">
            <h4>{path.career}</h4>
            
            <ul className="checklist">
              {SKILL_MAP[path.career]?.map((skill) => (
                <li key={skill}>
                  <label style={{ cursor: "pointer" }}>
                    <input type="checkbox" checked={ completedSkills[path.career]?.includes(skill) || false }
                    onChange={() => {
                      setCompletedSkills((prev) => {
                        const careerSkills = prev[path.career] || [];
                        
                        const updatedCareerSkills = careerSkills.includes(skill)
                        ? careerSkills.filter((s) => s !== skill)
                        : [...careerSkills, skill];
                        
                        const updated = {...prev,
                          [path.career]: updatedCareerSkills,
                        };
                        
                        localStorage.setItem("completedSkills",
                          JSON.stringify(updated)
                        );
                        
                        return updated; });}}/>
                        <span style={{ marginLeft: "8px" }}>{skill}</span>
                    </label>
                </li>))}
            </ul>
          </div>))}
      </section>


      {/* ================= RESOURCES ================= */}
      {activeCareer && (
        <section className="section">
          <h2 className="section-title">Learning Resources</h2>

          <div className="resource-buttons">
            <button onClick={() => setResourceType("videos")}>Videos</button>&emsp;
            <button onClick={() => setResourceType("docs")}>Docs</button>&emsp;
            <button onClick={() => setResourceType("websites")}>Websites</button>&emsp;
            <button onClick={() => setResourceType("tools")}>Tools</button>
          </div>

          <div className="task-card">
            <h4>{resourceType.toUpperCase()}</h4>

            <ul>
              {RESOURCE_MAP[activeCareer][resourceType].map((item, i) => (
                <li key={i}>
                  {item.startsWith("http") ? (
                    <a href={item} target="_blank" rel="noreferrer">
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;

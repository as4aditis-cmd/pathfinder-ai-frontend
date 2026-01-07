// src/pages/Profile.js
import { useEffect, useState } from "react";

const Profile = () => {
  const [savedPaths, setSavedPaths] = useState([]);
  const [completedSkills, setCompletedSkills] = useState({});
  const [streak, setStreak] = useState(0);
  const [streakBroken, setStreakBroken] = useState(false);
  const [profileId, setProfileId] = useState("");

  // ---------- INITIAL LOAD ----------
  useEffect(() => {
    const paths =
      JSON.parse(localStorage.getItem("savedLearningPaths")) || [];
    setSavedPaths(paths);

    const skills =
      JSON.parse(localStorage.getItem("completedSkills")) || {};
    setCompletedSkills(skills);

    setupProfileId();
    handleStreak();
  }, []);

  // ---------- PROFILE ID ----------
  const setupProfileId = () => {
    let id = localStorage.getItem("profileId");
    if (!id) {
      id = Math.random().toString(36).substring(2, 10);
      localStorage.setItem("profileId", id);
    }
    setProfileId(id);
  };

  const profileLink = `${window.location.origin}/profile/public/${profileId}`;

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profileLink);
    alert("Public profile link copied!");
  };

  // ---------- STREAK ----------
  const handleStreak = () => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("lastVisitDate");
    let currentStreak =
      Number(localStorage.getItem("learningStreak")) || 0;

    if (!lastVisit) {
      currentStreak = 1;
    } else {
      const diff =
        (new Date(today) - new Date(lastVisit)) /
        (1000 * 60 * 60 * 24);

      if (diff === 1) {
        currentStreak += 1;
      } else if (diff > 1) {
        currentStreak = 1;
        setStreakBroken(true);
        notifyStreakBroken();
      }
    }

    localStorage.setItem("learningStreak", currentStreak);
    localStorage.setItem("lastVisitDate", today);
    setStreak(currentStreak);
  };

  const notifyStreakBroken = () => {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") {
      new Notification("🔥 Streak Broken!", {
        body: "You missed a day. Restart today 💪",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  };

  // ---------- ACHIEVEMENTS ----------
  const totalSkillsCompleted = Object.values(completedSkills).reduce(
    (sum, skills) => sum + skills.length,
    0
  );

  const achievements = [
    streak >= 3 && "🔥 3-Day Consistency Champ",
    streak >= 7 && "🚀 7-Day Learning Warrior",
    totalSkillsCompleted >= 3 &&
      "🧠 Skill Builder – 3 Skills Mastered",
    savedPaths.length >= 2 &&
      "🎯 Multi-Career Explorer",
  ].filter(Boolean);

  return (
    <div className="profile-page">

      {/* HEADER */}
      <section className="section">
        <h2 className="section-title">Your Profile</h2>
        <p className="subtitle">
          Learn • Track • Share your journey 🌍
        </p>
      </section>

      {/* PUBLIC PROFILE LINK */}
      <section className="section card">
        <h3>Public Profile</h3>
        <p style={{ wordBreak: "break-all" }}>{profileLink}</p>

        <button
          className="secondary-btn"
          onClick={copyProfileLink}
        >
          Copy Profile Link
        </button>

        <p style={{ marginTop: "8px", opacity: 0.7 }}>
          Share your progress with friends or recruiters 🚀
        </p>
      </section>

      {/* SELECTED CAREERS */}
      <section className="section card">
        <h3>Selected Career Paths</h3>

        {savedPaths.length === 0 && (
          <p>No learning path saved yet</p>
        )}

        {savedPaths.map((path) => (
          <div key={path.id} style={{ marginBottom: "15px" }}>
            <strong>{path.career}</strong>
            <ul>
              {(completedSkills[path.career] || []).map(
                (skill, i) => (
                  <li key={i}>✔ {skill}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>

      {/* STREAK */}
      <section className="section card">
        <h3>Learning Streak</h3>
        <p className="streak">🔥 {streak} Day(s)</p>

        {streakBroken && (
          <p style={{ color: "#ff7675" }}>
            ⚠️ Streak broken — but comeback starts now!
          </p>
        )}
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section card">
        <h3>Achievements</h3>

        {achievements.length === 0 && (
          <p>🎯 Start learning to unlock badges!</p>
        )}

        <div className="achievements">
          {achievements.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </div>

        <p style={{ marginTop: "10px", opacity: 0.8 }}>
          Every small step compounds into success 💙
        </p>
      </section>

    </div>
  );
};

export default Profile;

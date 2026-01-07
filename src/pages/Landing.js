import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
        <div className="page">
            {/* HERO SECTION */}
            <h1>PathFinder AI</h1>
            <h3>Find the right career path for YOU</h3>
            <blockquote>
                Not sure what career to choose?
                <br />
                Tell us what you love — we’ll guide you step by step.
            </blockquote>
            <button onClick={() => navigate("/discover")}>
                Discover Your Career Path
            </button>
            {/* HOW IT WORKS */}
            <h2 style={{ marginTop: "40px" }}>How It Works</h2>
            <div className="card">
                <h4>1️⃣ Describe your interests</h4>
                <p>Tell us what you enjoy and what you’re good at.</p>
            </div>
            <div className="card">
                <h4>2️⃣ Explore career options</h4>
                <p>We suggest careers that match your interests.</p>
            </div>
            <div className="card">
                <h4>3️⃣ Learn skills practically</h4>
                <p>Daily tasks, challenges & community support.</p>
            </div>
        </div>
    </div>
  );
}

export default Landing;

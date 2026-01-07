import { Link } from "react-router-dom";
import logo from "../assets/pathfinder-logo.png"; // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo + Title */}
      <div className="nav-left">
        <img src={logo} alt="Pathfinder AI" className="nav-logo" />
        <span className="nav-title">Pathfinder AI</span>
      </div>

      {/* Right: Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/community">Community</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="glowing-hr"></div>
    </nav>
  );
}

export default Navbar;

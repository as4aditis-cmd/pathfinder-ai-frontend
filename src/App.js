import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Landing from "./pages/Landing";
import CareerDiscovery from "./pages/CareerDiscovery";
import CareerResults from "./pages/CareerResults";
import LearningPath from "./pages/LearningPath";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Chat";
import Profile from "./pages/Profile";



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={<CareerDiscovery />} />
        <Route path="/results" element={<CareerResults />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

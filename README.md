🚀 Pathfinder AI – Frontend
Pathfinder AI is an AI-powered career guidance platform that helps users discover the right career path, analyze skill gaps, track learning progress, and stay motivated throughout their journey.
This repository contains the frontend of Pathfinder AI, built using React and deployed on Vercel.


🌐 Live Demo
🔗 Frontend URL:
https://pathfinder-ai-frontend-omega.vercel.app
🔗 Backend API:
https://skill-gap-analyser-ves3.onrender.com


🧠 What Pathfinder AI Does
🎯 Career discovery based on user skills & interests
📊 AI-powered skill gap analysis
🗺️ Personalized learning roadmaps
📈 Progress tracking with visual progress bars
🔥 Daily streak system to build consistency
🏆 Achievements & motivation system
💬 Community discussion & Q&A
👤 Public user profile sharing


🛠️ Tech Stack (Frontend)
⚛️ React (Create React App)
🧭 React Router DOM
🎨 CSS / Custom UI


🌐 Fetch API (Backend integration)
💾 LocalStorage (Progress persistence)
🚀 Vercel (Deployment)


📁 Project Structure
pathfinder-ai-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Dashboard.js
│   │   ├── LearningPath.js
│   │   ├── Profile.js
│   │   ├── Chat.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── CareerDiscovery.js
│   │   ├── CareerResults.js
│   │   └── Landing.js
│   │
│   ├── services/
│   │   └── skillGapApi.js
│   │
│   ├── data/
│   │   └── roadmaps.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
├── .gitignore
└── README.md


🔗 Backend Integration
The frontend communicates with a Flask backend API for skill gap analysis.
API Endpoint Used
POST /api/skill-gap


Example Request
{
  "career": "Data Analyst",
  "skills": ["excel", "sql", "python"]
}

Example Frontend Call
const response = await fetch(
  "https://skill-gap-analyser-ves3.onrender.com/api/skill-gap",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ career, skills })
  }
);


📊 Progress Tracking Logic
Each career has predefined skills
Users check skills as they complete them
Progress % = (completed skills / total skills) × 100
Stored in localStorage
Automatically reflected in the Dashboard


🔥 Streak System (Frontend Logic)
Tracks daily site visits
Increases streak if user returns the next day
Breaks streak if a day is missed
Displays streak status in the Profile page
Motivational messages shown on streak breaks 🎯


🧪 Run Locally
1️⃣ Clone the repository
git clone https://github.com/as4aditis-cmd/pathfinder-ai-frontend.git
2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm start


App will run at:
http://localhost:3000


🚀 Deployment
Frontend is deployed using Vercel.
Auto-deploys on every push to main
Environment variables managed via Vercel dashboard
Optimized for fast global delivery


🧩 Future Enhancements
🔐 Authentication (Firebase / OAuth)
🧠 AI roadmap generation (LLM-based)
📅 Calendar-based learning planner
📱 Mobile responsive improvements
🌍 Multi-language support


👩‍💻 Author
Aditi Sharma
💡 Frontend Developer | AI & Web Enthusiast
GitHub: https://github.com/as4aditis-cmd
Project: Pathfinder AI


⭐ Support
If you like this project:
⭐ Star the repository
🍴 Fork it

🧠 Share feedback

🚀 “Your career is a journey — Pathfinder AI helps you choose the right path.”

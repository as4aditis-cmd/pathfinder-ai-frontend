🚀 Pathfinder AI – Frontend
Pathfinder AI is an AI-powered career guidance platform that helps users discover the right career path, analyze skill gaps, track learning progress, and stay motivated throughout their journey.
This repository contains the frontend of Pathfinder AI, built using React and deployed on Vercel.<br><br>


🌐 Live Demo<br><br>
🔗 Frontend URL:
https://pathfinder-ai-frontend-omega.vercel.app<br><br>
🔗 Backend API:
https://skill-gap-analyser-ves3.onrender.com<br><br>


🧠 What Pathfinder AI Does<br><br>
🎯 Career discovery based on user skills & interests<br><br>
📊 AI-powered skill gap analysis<br><br>
🗺️ Personalized learning roadmaps<br><br>
📈 Progress tracking with visual progress bars<br><br>
🔥 Daily streak system to build consistency<br><br>
🏆 Achievements & motivation system<br><br>
💬 Community discussion & Q&A<br><br>
👤 Public user profile sharing<br><br>


🛠️ Tech Stack (Frontend)<br><br>
⚛️ React (Create React App)<br><br>
🧭 React Router DOM<br><br>
🎨 CSS / Custom UI<br><br>


🌐 Fetch API (Backend integration)<br><br>
💾 LocalStorage (Progress persistence)<br><br>
🚀 Vercel (Deployment)<br><br>


📁 Project Structure<br><br>
pathfinder-ai-frontend/<br><br>
│<br><br>
├── public/<br><br>
│   └── index.html<br><br>
│<br><br>
├── src/<br><br>
│   ├── components/<br><br>
│   │   ├── Navbar.js<br><br>
│   │   ├── Dashboard.js<br><br>
│   │   ├── LearningPath.js<br><br>
│   │   ├── Profile.js<br><br>
│   │   ├── Chat.js<br><br>
│   │   └── ...<br><br>
│   │<br><br>
│   ├── pages/<br><br>
│   │   ├── CareerDiscovery.js<br><br>
│   │   ├── CareerResults.js<br><br>
│   │   └── Landing.js<br><br>
│   │<br><br>
│   ├── services/<br><br>
│   │   └── skillGapApi.js<br><br>
│   │<br><br>
│   ├── data/<br><br>
│   │   └── roadmaps.js<br><br>
│   │<br><br>
│   ├── App.js<br><br>
│   ├── index.js<br><br>
│   └── App.css<br><br>
│<br><br>
├── package.json<br><br>
├── .gitignore<br><br>
└── README.md<br><br>


🔗 Backend Integration<br><br>
The frontend communicates with a Flask backend API for skill gap analysis.<br><br>
API Endpoint Used<br><br>
POST /api/skill-gap<br><br>


Example Request<br><br>
{<br><br>
  "career": "Data Analyst",<br><br>
  "skills": ["excel", "sql", "python"]<br><br>
}<br><br>

Example Frontend Call<br><br>
const response = await fetch(<br><br>
  "https://skill-gap-analyser-ves3.onrender.com/api/skill-gap",<br><br>
  {<br><br>
    method: "POST",<br><br>
    headers: { "Content-Type": "application/json" },<br><br>
    body: JSON.stringify({ career, skills })<br><br>
  }<br><br>
);<br><br>


📊 Progress Tracking Logic<br><br>
Each career has predefined skills<br><br>
Users check skills as they complete them<br><br>
Progress % = (completed skills / total skills) × 100<br><br>
Stored in localStorage<br><br>
Automatically reflected in the Dashboard<br><br>


🔥 Streak System (Frontend Logic)<br><br>
Tracks daily site visits<br><br>
Increases streak if user returns the next day<br><br>
Breaks streak if a day is missed<br><br>
Displays streak status in the Profile page<br><br>
Motivational messages shown on streak breaks 🎯<br><br>


🧪 Run Locally<br><br>
1️⃣ Clone the repository<br><br>
git clone https://github.com/as4aditis-cmd/pathfinder-ai-frontend.git<br><br>
2️⃣ Install dependencies<br><br>
npm install<br><br>
3️⃣ Start the development server<br><br>
npm start<br><br>


App will run at:<br><br>
http://localhost:3000<br><br>


🚀 Deployment<br><br>
Frontend is deployed using Vercel.<br><br>
Auto-deploys on every push to main<br><br>
Environment variables managed via Vercel dashboard<br><br>
Optimized for fast global delivery<br><br>


🧩 Future Enhancements<br><br>
🔐 Authentication (Firebase / OAuth)<br><br>
🧠 AI roadmap generation (LLM-based)<br><br>
📅 Calendar-based learning planner<br><br>
📱 Mobile responsive improvements<br><br>
🌍 Multi-language support<br><br>


👩‍💻 Author<br><br>
Aditi Sharma<br><br>
💡 Frontend Developer | AI & Web Enthusiast<br><br>
GitHub: https://github.com/as4aditis-cmd<br><br>
Project: Pathfinder AI<br><br>


⭐ Support<br><br>
If you like this project:<br><br>
⭐ Star the repository<br><br>
🍴 Fork it<br><br>

🧠 Share feedback

🚀 “Your career is a journey — Pathfinder AI helps you choose the right path.”

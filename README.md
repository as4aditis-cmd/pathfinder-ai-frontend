🚀 Pathfinder AI – Frontend
Pathfinder AI is an AI-powered career guidance platform that helps users discover the right career path, analyze skill gaps, track learning progress, and stay motivated throughout their journey.
This repository contains the frontend of Pathfinder AI, built using React and deployed on Vercel.<br><br>


🌐 Live Demo<br>
🔗 Frontend URL:<br>
https://pathfinder-ai-frontend-omega.vercel.app<br>
🔗 Backend API:<br>
https://skill-gap-analyser-ves3.onrender.com<br><br>


🧠 What Pathfinder AI Does<br>
🎯 Career discovery based on user skills & interests<br>
📊 AI-powered skill gap analysis<br>
🗺️ Personalized learning roadmaps<br>
📈 Progress tracking with visual progress bars<br>
🔥 Daily streak system to build consistency<br>
🏆 Achievements & motivation system<br>
💬 Community discussion & Q&A<br>
👤 Public user profile sharing<br><br>


🛠️ Tech Stack (Frontend)<br>
⚛️ React (Create React App)<br>
🧭 React Router DOM<br>
🎨 CSS / Custom UI<br><br>


🌐 Fetch API (Backend integration)<br>
💾 LocalStorage (Progress persistence)<br>
🚀 Vercel (Deployment)<br><br>


📁 Project Structure<br>
pathfinder-ai-frontend/<br>
│<br>
├── public/<br>
│   └── index.html<br>
│<br>
├── src/<br>
│   ├── components/<br>
│   │   ├── Navbar.js<br>
│   │   ├── Dashboard.js<br>
│   │   ├── LearningPath.js<br>
│   │   ├── Profile.js<br>
│   │   ├── Chat.js<br>
│   │   └── ...<br>
│   │<br>
│   ├── pages/<br>
│   │   ├── CareerDiscovery.js<br>
│   │   ├── CareerResults.js<br>
│   │   └── Landing.js<br>
│   │<br>
│   ├── services/<br>
│   │   └── skillGapApi.js<br>
│   │<br>
│   ├── data/<br>
│   │   └── roadmaps.js<br>
│   │<br>
│   ├── App.js<br>
│   ├── index.js<br>
│   └── App.css<br>
│<br>
├── package.json<br>
├── .gitignore<br>
└── README.md<br><br>


🔗 Backend Integration<br>
The frontend communicates with a Flask backend API for skill gap analysis.<br>
API Endpoint Used<br>
POST /api/skill-gap<br><br>


Example Request<br>
{<br>
  "career": "Data Analyst",<br>
  "skills": ["excel", "sql", "python"]<br>
}<br><br>

Example Frontend Call<br>
const response = await fetch(<br>
  "https://skill-gap-analyser-ves3.onrender.com/api/skill-gap",<br>
  {<br>
    method: "POST",<br>
    headers: { "Content-Type": "application/json" },<br>
    body: JSON.stringify({ career, skills })<br>
  }<br>
);<br><br>


📊 Progress Tracking Logic
Each career has predefined skills<br>
Users check skills as they complete them<br>
Progress % = (completed skills / total skills) × 100<br>
Stored in localStorage<br>
Automatically reflected in the Dashboard<br><br>


🔥 Streak System (Frontend Logic)<br>
Tracks daily site visits<br>
Increases streak if user returns the next day<br>
Breaks streak if a day is missed<br>
Displays streak status in the Profile page<br>
Motivational messages shown on streak breaks 🎯<br><br>


🧪 Run Locally<br>
1️⃣ Clone the repository<br>
git clone https://github.com/as4aditis-cmd/pathfinder-ai-frontend.git<br>
2️⃣ Install dependencies<br>
npm install<br>
3️⃣ Start the development server<br>
npm start<br>


App will run at:<br>
http://localhost:3000<br><br>


🚀 Deployment<br>
Frontend is deployed using Vercel.<br>
Auto-deploys on every push to main<br>
Environment variables managed via Vercel dashboard<br>
Optimized for fast global delivery<br><br>


🧩 Future Enhancements<br>
🔐 Authentication (Firebase / OAuth)<br>
🧠 AI roadmap generation (LLM-based)<br>
📅 Calendar-based learning planner<br>
📱 Mobile responsive improvements<br>
🌍 Multi-language support<br><br>


👩‍💻 Author<br>
Aditi Sharma<br>
💡 Frontend Developer | AI & Web Enthusiast<br>
GitHub: https://github.com/as4aditis-cmd<br>
Project: Pathfinder AI<br><br>


⭐ Support<br>
If you like this project:<br>
⭐ Star the repository<br>
🍴 Fork it<br>

🧠 Share feedback <br>

🚀 “Your career is a journey — Pathfinder AI helps you choose the right path.”

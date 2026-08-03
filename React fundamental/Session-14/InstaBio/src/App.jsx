// App.jsx - main component
// we import all our components and use them here

import ProfileCard from './components/ProfileCard.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import './App.css'

function App() {

  // sample data for profile
  let userName = "Bhavika Patel"
  let userBio = "B.Tech CSE student | Learning React.js 🚀 | Building cool stuff"
  let userPic = "https://api.dicebear.com/9.x/avataaars/svg?seed=Bhavik"

  // social links array
  let socialLinks = [
    { platform: "instagram", label: "📸 Instagram", url: "https://instagram.com/bhavik" },
    { platform: "linkedin", label: "💼 LinkedIn", url: "https://linkedin.com/in/bhavik" },
    { platform: "github", label: "🐙 GitHub", url: "https://github.com/mrbhavik9568" },
  ]

  // sample project data
  let projectTitle = "Weather App"
  let projectDesc = "A simple weather app built with React and OpenWeather API. Shows current weather of any city."
  let projectTech = ["React", "CSS", "OpenWeather API"]
  let projectLink = "https://github.com/mrbhavik9568/weather-app"

  return (
    <div className="app-container">
      {/* page title */}
      <h1 className="app-title">InstaBio</h1>
      <p className="app-subtitle">My personal bio page built with React ⚛️</p>

      {/* Task 1 - Profile Card */}
      <ProfileCard
        picture={userPic}
        name={userName}
        bio={userBio}
      />

      {/* Task 2 & 4 - Social Links with LIGHT theme */}
      <p className="section-label">— Light Theme —</p>
      <SocialLinks links={socialLinks} theme="light" />

      {/* Task 4 - Social Links with DARK theme */}
      <p className="section-label">— Dark Theme —</p>
      <SocialLinks links={socialLinks} theme="dark" />

      {/* Task 5 - Project Card */}
      <p className="section-label">— My Project —</p>
      <ProjectCard
        projectTitle={projectTitle}
        description={projectDesc}
        technologies={projectTech}
        githubLink={projectLink}
      />

      {/* footer */}
      <p className="footer">Made with ❤️ by Bhavik | React + Vite</p>
    </div>
  )
}

export default App

// ====================================================
// GitHub Copilot Suggestion (sample):
// ====================================================
// function ProjectCard({ title, desc, tech, link }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <p>{desc}</p>
//       <ul>{tech.map(t => <li>{t}</li>)}</ul>
//       <a href={link}>View on GitHub</a>
//     </div>
//   )
// }
// ====================================================
// Above is what Copilot suggested. Below is my own version.
// ====================================================

// ProjectCard component
// shows a project with title, description, technologies and github link
// all data comes from props

function ProjectCard(props) {
  return (
    <div className="project-card">
      {/* project title */}
      <h3 className="project-title">{props.projectTitle}</h3>

      {/* project description */}
      <p className="project-desc">{props.description}</p>

      {/* technologies used - loop through the array */}
      <div className="project-tech">
        {props.technologies.map(function (tech, index) {
          return (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          )
        })}
      </div>

      {/* github link */}
      <a
        href={props.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        📂 View on GitHub
      </a>
    </div>
  )
}

export default ProjectCard

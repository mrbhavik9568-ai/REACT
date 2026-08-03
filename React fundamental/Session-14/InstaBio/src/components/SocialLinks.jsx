// SocialLinks component
// shows clickable social media links (instagram, linkedin, github)
// accepts an array of links through props
// also accepts an optional "theme" prop - can be "light" or "dark"

function SocialLinks(props) {
  // if no theme is passed, use "light" as default
  let themeClass = "social-light"
  if (props.theme === "dark") {
    themeClass = "social-dark"
  }

  return (
    <div className={`social-links ${themeClass}`}>
      <h3 className="social-heading">🔗 Connect with me</h3>

      <ul className="social-list">
        {/* loop through the links array and display each one */}
        {props.links.map(function (item, index) {
          return (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${item.platform}`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SocialLinks

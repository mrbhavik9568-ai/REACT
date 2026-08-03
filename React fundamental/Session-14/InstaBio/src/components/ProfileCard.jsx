// ProfileCard component
// this component shows the user's profile picture, name and bio
// all data comes from props

function ProfileCard(props) {
  return (
    <div className="profile-card">
      {/* profile picture */}
      <img
        src={props.picture}
        alt={props.name}
        className="profile-pic"
      />

      {/* user name */}
      <h2 className="profile-name">{props.name}</h2>

      {/* short bio */}
      <p className="profile-bio">{props.bio}</p>
    </div>
  )
}

export default ProfileCard

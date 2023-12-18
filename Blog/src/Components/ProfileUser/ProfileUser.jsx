import "./ProfileUser.css"

export function ProfileUser({nome, professione, avatarLink}){
  return(
    <div className="user-card">
      <img src={avatarLink} alt="avatar" className="avatar"/>
      <h1>{nome}</h1>
      <p className="job">{professione}</p>
    </div>
  )
}
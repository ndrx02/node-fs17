export function ProfileUser({nome, professione, avatarLink}){
  return(
    <div>
      <img src={avatarLink} alt="avatar"/>
      <h1>{nome}</h1>
      <p>{professione}</p>
    </div>
  )
}
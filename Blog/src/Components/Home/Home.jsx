import { PostPreview } from "../Post/PostPreview/PostPreview"
import { Link } from "react-router-dom"
import { Button } from "../Shared_button/Button"
import { ProfileUser } from "../ProfileUser/ProfileUser"

export const Home = () => {

  const linkButton = ["Facebook", "Linkedin", "Twitter", "Github", "Instagram"]
  return (
    <div>
      <ProfileUser
        nome="Bjorn"
        professione="Full-stack Web Developer"
        avatarLink="https://avatars.githubusercontent.com/u/117609164?v=4"
      />
      {linkButton.map((el, index) => (
        <Button name={el} />
      ))}
      <PostPreview />
      <Link to="/post"> continue reading</Link>
    </div>
  );
}
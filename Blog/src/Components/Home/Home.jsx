import { PostPreview } from "../Post/PostPreview/PostPreview";
import { Link } from "react-router-dom";
import { Button } from "../Shared_button/Button";
import { ProfileUser } from "../ProfileUser/ProfileUser";
import { CreationPage } from "../CreationPage/CreationPage";

export const Home = () => {
  const linkButton = ["Facebook", "Linkedin", "Twitter", "Github", "Instagram"];
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
      <Link to="/post/create">Clicca qui per creation page</Link>
    </div>
  );
};

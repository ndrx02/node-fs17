import { PostPreview } from "../Post/PostPreview/PostPreview"
import { Link } from "react-router-dom"
import { Button } from "../Shared_button/Button"

export const Home = () => {

  const linkButton = ["Facebook", "Linkedin", "Twitter", "Github", "Instagram"]
  return(
    <div>
      {linkButton.map((el, index)=> <Button name= {el} />)}
      <PostPreview/>
      <Link to="/post">
        {" "}
        continue reading
      </Link>
    </div>
  )
}
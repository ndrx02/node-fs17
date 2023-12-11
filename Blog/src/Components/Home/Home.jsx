import { PostPreview } from "../Post/PostPreview/PostPreview"
import { Link } from "react-router-dom"

export const Home = () => {
  return(
    <div>
      <PostPreview/>
      <Link to="/post">
        {" "}
        continue reading
      </Link>
    </div>
  )
}
import { Link } from "react-router-dom";
import { PostPreview } from "./PostPreview/PostPreview";

export const Post = () => {
  return (
    <div>
      <Link to="/post/create">Create Post</Link>

      <PostPreview />
      <div>
        {/*         <h3></h3>
         */}{" "}
        <p>testo post</p>
      </div>
    </div>
  );
};

import { PostPreview } from "./PostPreview/PostPreview";
import "./post.css"

export const Post = () => {
  return (
    <div>
      <PostPreview />
      <div className="container-text">
{/*         <h3></h3>
 */}        <p>testo post</p>
      </div>
    </div>
  );
};

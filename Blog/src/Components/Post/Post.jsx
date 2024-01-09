import { PostPreview } from "./PostPreview/PostPreview";
import "./post.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const Post = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/posts");

      setData(response.data);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data &&
        data.map((post) => {
          return (
            <div>
              <PostPreview />
              <div className="container-text">
                {/*         <h3></h3>
                 */}{" "}
                <p>{post && post.testo}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

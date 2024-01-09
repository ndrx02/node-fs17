import { PostPreview } from "./PostPreview/PostPreview";
import "./post.css"
import { useState, useEffect } from "react";
import axios from "axios";

export const Post = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/posts')
      setData(
        response.data[0]
      )}
    fetchData()
  }, [])
  console.log(data)

  return (
    <div>
      <PostPreview />
      <div className="container-text">
{/*         <h3></h3>
 */}        <p>{data && data.testo}</p>
      </div>
    </div>
  );
};

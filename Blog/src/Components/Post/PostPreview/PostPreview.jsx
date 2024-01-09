import { useEffect, useState } from "react";
import "./postPreview.css"
import axios from "axios"
export let dataToExport

export const PostPreview = () => {

  const [data, setData] = useState()


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/posts')
      setData(
        response.data[0]
      )
    }
    fetchData()
  }, [])

  console.log(data)

return (
  <div className="container-post">
    <img className="image-post-preview" src="https://avatars.githubusercontent.com/u/104137753?v=4" alt="image" />
    <h1 className="title-post"> {data && data.title} </h1>
    <p className="data-post"> {data && data.data} </p>
    <p className="riassunto-post">{data && data.resume}</p>
  </div>
);
};

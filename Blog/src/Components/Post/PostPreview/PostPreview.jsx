import { useEffect, useState } from "react";
import "./postPreview.css"
import axios from "axios"

export const PostPreview = () => {
  useState()

  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/posts')
      console.log(response)
   }
    fetchData()
  }, [])

  return (
    <div className="container-post">
      <img className="image-post-preview" src="https://avatars.githubusercontent.com/u/104137753?v=4" alt="image" />
      <h1 className="title-post"> Titolo </h1>
      <p className="data-post"> data </p>
      <p className="riassunto-post">riassunto</p>
    </div>
  );
};

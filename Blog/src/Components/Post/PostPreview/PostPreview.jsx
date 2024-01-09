import { useEffect, useState } from "react";
import "./postPreview.css"

export const PostPreview = ( {data} ) => {

return (
  <div className="container-post">
    <img className="image-post-preview" src="https://avatars.githubusercontent.com/u/104137753?v=4" alt="image" />
    <h1 className="title-post"> {data && data.title} </h1>
    <p className="data-post"> {data && data.data} </p>
    <p className="riassunto-post">{data && data.resume}</p>
  </div>
);
};

import "./postPreview.css"

export const PostPreview = () => {
  return (
    <div className="container-post">
      <img className="image-post-preview" src="https://avatars.githubusercontent.com/u/104137753?v=4" alt="image" />
      <h1 className="title-post"> Titolo </h1>
      <p className="data-post"> data </p>
      <p className="riassunto-post">riassunto</p>
    </div>
  );
};

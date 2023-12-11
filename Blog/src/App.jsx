import { Routes, Route } from "react-router-dom";
import { Post } from "./Components/Post/Post";
import { Home } from "./Components/Home/Home";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

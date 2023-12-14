import { Routes, Route } from "react-router-dom";
import { Post } from "./Components/Post/Post";
import { Home } from "./Components/Home/Home";
import { CreationPage } from "./Components/CreationPage/CreationPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/create" element={<CreationPage />} />
      </Routes>
    </>
  );
}

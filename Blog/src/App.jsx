import { Routes, Route } from "react-router-dom";
import { Post } from "./Components/Post/Post";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import { Post } from "./Components/Post/Post";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { SignUp } from "./Components/SignUp/SingUp";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

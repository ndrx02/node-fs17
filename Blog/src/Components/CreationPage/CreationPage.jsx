import React from "react";
import { Post } from "../Post/Post";
import { Link } from "react-router-dom";
import "./CreationPage.css"

export function CreationPage() {
  return (
    <div className="Container">
      <h2>Post Creation</h2>
      <form action="">
        <label htmlFor="title">Titolo</label>
        <input type="text" id="title" />
        <label htmlFor="title-post">Titolo post</label>
        <input type="text" id="title-post" />
        <label htmlFor="content">Contenuto</label>
        <textarea id="content" rows="4" cols="50" />
        <label htmlFor="content-preview">Preview contenuto</label>
        <textarea id="content-preview" rows="2" cols="30" />
        <label htmlFor="banner">Imagine</label>
        <input class="fileInput" type="file" id="banner" />
        <button>Submit</button>
      </form>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

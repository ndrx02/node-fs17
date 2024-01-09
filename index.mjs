import express from "express";
import cors from "cors";
const postData = [
  {
    title: "title",
    data: "data",
    resume: "resume",
    testo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "titolo",
    data: "data",
    resume: "riassunto",
    testo:
      "latino Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

let idPost = 1;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.json(postData);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;

  res.json(postData.filter((el) => el.id === id));
});

app.post("/posts", (req, res) => {
  const data = { id: idPost, ...req.body };
  idPost++;

  postData.push(data);

  res.status(201).json("Post Created");
});

app.listen(3000, () => {
  console.log("App is running!");
});

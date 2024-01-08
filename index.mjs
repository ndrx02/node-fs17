import express from "express";
import cors from 'cors'
const postData = ["cane", "casa"];

let idPost = 1;

const app = express();

app.use(express.json());
app.use(cors())

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

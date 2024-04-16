import express from "express";
import cors from "cors";
import multer from "multer";
import { readBlogs, writeBlogs } from "./filesyst.js";
//server einrichten
//daten von Beiträgen speichern
//routen definieren fürs ertellen und abrufen von Beiträgen
//multer für bilder hochladen
const app = express();
app.use(cors());
app.use(express.static("uploads"));

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());
const upload = multer({ dest: "./uploads" });

app.get("/api/v1/Blogs", (_, res) => {
  readBlogs()
    .then((blog) => res.status(200).json(blog))
    .catch((err) =>
      res.status(500).json({ err, message: "cannot read all blogs" })
    );
});

app.get("/api/v1/Blogs/:id", (req, res) => {
  const blogId = req.params.id;
  readBlogs()
    .then((blog) => blog.find((t) => t.id.toString() === blogId))
    .then((foundBlog) => res.status(200).json(foundBlog))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read blog" })
    );
});

app.post("/api/v1/Blogs", (req, res) => {
  readBlogs()
    .then((blog) => {
      let lastBlog;
      blog.length === 0
        ? (lastBlog = 0)
        : (lastBlog = blog[blog.length - 1].id);

      const newBlog = {
        id: lastBlog + 1,
        blog_title: req.body.blog_title,
        blog_image: req.body.blog_image,
        blog_description: req.body.blog_description,
      };
      return [...blog, newBlog];
    })
    .then((newBlog) => writeBlogs(newBlog))
    .then((newBlog) => res.status(200).json(newBlog))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read all blogs" })
    );
});

app.post("/api/v1/files/upload", upload.single("Blog"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({ fileName: req.file.filename });
});

const PORT = 4000;
app.listen(PORT, () => console.log("Server ready at port", PORT));

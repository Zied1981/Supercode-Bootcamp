import express from "express";
import { readToDos, writeToDos } from "./filesyst.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/v1/toDos", (_, res) => {
  readToDos()
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "cannot read all toDos" })
    );
});

app.get("/api/v1/toDos/:id", (req, res) => {
  const todoId = req.params.id;
  readToDos()
    .then((todos) => todos.find((t) => t.id.toString() === todoId))
    .then((foundTodo) => res.status(200).json(foundTodo))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read todos" })
    );
});

app.post("/api/v1/toDos/", (req, res) => {
  readToDos()
    .then((todos) => {
      let lastTodo;
      todos.length === 0
        ? (lastTodo = 0)
        : (lastTodo = todos[todos.length - 1].id);

      const newTodo = {
        id: lastTodo + 1,
        toDo_title: req.body.toDo_title,
        toDo_type: req.body.toDo_type,
        toDo_status: req.body.toDo_status,
      };
      return [...todos, newTodo];
    })
    .then((todosWithNew) => writeToDos(todosWithNew))
    .then((todosWithNew) => res.status(200).json(todosWithNew))
    .catch((err) =>
      res.status(500).json({ err, message: "could not read all todos" })
    );
});
app.patch("/api/v1/toDos/:id", (req, res) => {
  const toDoIdToUpdate = req.params.id;
  const updateInfo = req.body;
  readToDos()
    .then((todos) =>
      todos.map((currentTodos) => {
        if (currentTodos.id.toString() === toDoIdToUpdate) {
          // update todos
          return {
            ...currentTodos,
            ...updateInfo,
          }; // overwrite currentTodos (to be updated) with updateInfo
        } else {
          return currentTodos; // leave non-target todos unmodified
        }
      })
    )
    .then((todos) => writeToDos(todos)) // todos sind hier ALLE aber OHNE der gelöschten todo
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not remove todos" })
    );
});
app.delete("/api/v1/toDos/:id", (req, res) => {
  // readTodos()
  // -> todos [<old todos>]
  // -> todos [...<old todos>].filter( not the one to be deleted by given id ) // "remove element"
  // -> writeTodos(new-array) // save to file
  // -> send to client
  const toDoIdToDelete = req.params.id;
  readToDos()
    .then((todo) => todo.filter((t) => t.id.toString() !== toDoIdToDelete))
    .then((todos) => writeToDos(todos)) // todos sind hier ALLE aber OHNE der gelöschten transaction
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not remove todos" })
    );
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server ready at port", PORT));

// Status-Codes (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
// 2__ (eg 200 OK, 201 Created) ===> Success
// 3__ (304 Not Modified) ==> Redirection
// 4__ (eg 400 Bad Request, 401 Unauthorized, 404 Not Found) ===> Client Error
// 5__ (eg 500 Internal Server Error) ===> Server Error

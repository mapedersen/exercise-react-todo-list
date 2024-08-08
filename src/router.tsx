import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Welcome } from "./components/Welcome";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
        index: true,
      },
      {
        path: "add-todo",
        element: <ToDoForm />,
      },
      {
        path: "edit-todo/:id",
        element: <ToDoForm />,
      },
      {
        path: "todos",
        element: <ToDoList />,
      },
    ],
  },
]);

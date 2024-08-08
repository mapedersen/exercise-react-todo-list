import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import "./index.css";
import { Welcome } from "./components/Welcome.tsx";
import AddToDo from "./components/AddToDo.tsx";
import ToDoList from "./components/ToDoList.tsx";
import { About } from "./components/About.tsx";

const router = createBrowserRouter([
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
        element: <AddToDo />,
      },
      {
        path: "edit-todo/:id",
        element: <AddToDo />,
      },
      {
        path: "todos",
        element: <ToDoList />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

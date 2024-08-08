import { ReactElement } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

import "./app.css";

export function App(): ReactElement {
  return (
    <div className="App">
      <NavBar />
      <ToDoProvider>
        <Outlet />
      </ToDoProvider>
    </div>
  );
}

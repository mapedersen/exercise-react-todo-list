import { ReactElement, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import uuid4 from "uuid4";

import NavBar from "./components/NavBar";

import { ToDos } from "./data/data";
import { IToDo } from "./interfaces/interfaces";

import "./app.css";

export function App(): ReactElement {
  const [todos, setToDos] = useState<IToDo[]>(ToDos);
  const navigate = useNavigate();

  const handleAddToDo = (todoTitle: string, todoOwner: string) => {
    const newToDo: IToDo = {
      creationDate: new Date(),
      id: uuid4(),
      isDone: false,
      owner: todoOwner,
      title: todoTitle,
    };
    setToDos((prevTodos) => {
      const updatedTodos = [...prevTodos, newToDo];
      return updatedTodos.sort(
        (a, b) =>
          Number(a.isDone) - Number(b.isDone) || a.creationDate.getTime() - b.creationDate.getTime()
      );
    });
    navigate("/todos");
  };

  const handleToDoAction = (
    id: string,
    action: string,
    updatedData?: { title: string; owner: string }
  ) => {
    setToDos((prevTodos) => {
      switch (action) {
        case "toggleStatus":
          return prevTodos
            .map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
            .sort((a, b) => Number(a.isDone) - Number(b.isDone));
        case "remove":
          return prevTodos.filter((todo) => todo.id !== id);
        case "edit":
          if (updatedData) {
            return prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo));
          } else {
            navigate(`/edit-todo/${id}`);
          }
          return prevTodos;
        default:
          return prevTodos;
      }
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Outlet context={{ todos, handleAddToDo, handleToDoAction }} />
    </div>
  );
}

import { ReactElement, useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { ToDos } from "./data";
import { IToDo } from "./interfaces";

import "./app.css"

export function App(): ReactElement {
  const [todos, setTodos] = useState<IToDo[]>(ToDos);

  const handleAddToDo = (todoTitle: string) => {
    setTodos(prevTodos => [...prevTodos, {title: todoTitle, isDone: false}])
  }

  return (
    <div className="App">
      <AddToDo onAddToDo={handleAddToDo}/>
      <ToDoList todos={todos}/>
    </div>
  );
}

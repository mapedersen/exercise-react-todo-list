import { ReactElement, useState } from "react";
import uuid4 from "uuid4";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { ToDos } from "./data";
import { IToDo } from "./interfaces";

import "./app.css"

export function App(): ReactElement {
  const [todos, setToDos] = useState<IToDo[]>(ToDos);

  const handleAddToDo = (todoTitle: string) => {
    setToDos(prevTodos => [...prevTodos, {id: uuid4(), title: todoTitle, isDone: false}])
  }

  // const handleRemoveTodo = (todo.id: string) => {
  //   // Remove Todo
  // }

  const handleStatusChangeToDo = (targetId: string): void => {
    setToDos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      )
    );
  }

  return (
    <div className="App">
      <AddToDo onAddToDo={handleAddToDo}/>
      <ToDoList todos={todos} onStatusChange={handleStatusChangeToDo}/>
    </div>
  );
}

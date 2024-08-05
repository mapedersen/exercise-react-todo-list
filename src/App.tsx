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

  const handleToDoAction = (id: string, action: string) => {
    setToDos(prevTodos => {
      switch (action) {
        case 'toggleStatus':
          return prevTodos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
          );
        case 'remove':
          return prevTodos.filter(todo => todo.id !== id);
        default:
          return prevTodos;
      }
    })
  }

  return (
    <div className="App">
      <AddToDo onAddToDo={handleAddToDo}/>
      <ToDoList todos={todos} handleToDoAction={handleToDoAction}/>
    </div>
  );
}

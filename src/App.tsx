import { ReactElement, useState } from "react";
import uuid4 from "uuid4";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { ToDos } from "./data";
import { IToDo } from "./interfaces";

import "./app.css"

export function App(): ReactElement {
  const [todos, setToDos] = useState<IToDo[]>(ToDos);

  const handleAddToDo = (todoTitle: string, todoOwner: string) => {
    const newToDo: IToDo = {
      creationDate: new Date(),
      owner: todoOwner,
      id: uuid4(),
      title: todoTitle,
      isDone: false,
    };
    setToDos(prevTodos => [...prevTodos, newToDo])
  };

  const handleToDoAction = (id: string, action: string) => {
    setToDos(prevTodos => {
      switch (action) {
        case 'toggleStatus':
          return prevTodos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
          )
          .sort((a, b) => Number(a.isDone) - Number(b.isDone))
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

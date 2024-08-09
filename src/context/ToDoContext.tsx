import { createContext, ReactElement, ReactNode, useState } from "react";
import { IToDo, IToDoContext } from "../interfaces/interfaces";
import { ToDos } from "../data/data";
import uuid4 from "uuid4";

interface IToDoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext<IToDoContext | undefined>(undefined);

export function ToDoProvider({ children }: IToDoProviderProps): ReactElement {
  const [todos, setToDos] = useState<IToDo[]>(ToDos);
  const [filterChoice, setFilterChoice] = useState<string>("Timestamp");

  const addToDo = (todoTitle: string, todoOwner: string) => {
    const newToDo: IToDo = {
      creationDate: new Date(),
      id: uuid4(),
      isDone: false,
      owner: todoOwner,
      title: todoTitle,
    };

    setToDos((prevTodos) => {
      const updatedTodos = [...prevTodos, newToDo];
      return sortTodos(updatedTodos);
    });
  };

  const toggleStatus = (id: string) => {
    setToDos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return sortTodos(updatedTodos);
    });
  };

  const removeTodo = (id: string) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, updatedData: { title: string; owner: string }) => {
    setToDos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo))
    );
  };

  const sortTodos = (todos: IToDo[]): IToDo[] => {
    return todos.sort((a, b) => {
      if (Number(a.isDone) !== Number(b.isDone)) {
        return Number(a.isDone) - Number(b.isDone);
      }
      return b.creationDate.getTime() - a.creationDate.getTime();
    });
  };

  const filterTodos = (todos: IToDo[]): IToDo[] => {
    switch (filterChoice) {
      case "Timestamp":
        return sortTodos(todos);
      case "Owner":
        return todos.sort((a, b) => a.owner.localeCompare(b.owner));
      default:
        return todos;
    }
  };

  const contextValue: IToDoContext = {
    todos: filterTodos(todos),
    addToDo,
    toggleStatus,
    removeTodo,
    editTodo,
    setFilterChoice,
    filterChoice,
  };

  return <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>;
}

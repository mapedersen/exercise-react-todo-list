import { createContext, ReactElement, ReactNode, useState } from "react";
import { IToDo, IToDoContext } from "../interfaces/interfaces";
import { ToDos } from "../data/data";
import uuid4 from "uuid4";
import { useNavigate } from "react-router-dom";

interface IToDoProviderProps {
  children: ReactNode;
}

export const ToDoContext = createContext<IToDoContext | undefined>(undefined);

export function ToDoProvider({ children }: IToDoProviderProps): ReactElement {
  const [todos, setToDos] = useState<IToDo[]>(ToDos);

  const navigate = useNavigate();

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
      return updatedTodos.sort(
        (a, b) =>
          Number(a.isDone) - Number(b.isDone) || a.creationDate.getTime() + b.creationDate.getTime()
      );
    });
  };

  const toggleStatus = (id: string) => {
    setToDos(
      (prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
      // .sort((a, b) => Number(a.isDone) - Number(b.isDone))
    );
  };

  const removeTodo = (id: string) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, updatedData: { title: string; owner: string }) => {
    navigate(`/edit-todo/${id}`);
    setToDos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo))
    );
  };

  const contextValue: IToDoContext = {
    todos,
    addToDo,
    toggleStatus,
    removeTodo,
    editTodo,
  };

  return <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>;
}

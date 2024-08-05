import { ReactElement } from "react";
import { IToDo } from "../interfaces";
import ToDo from "./ToDo";

interface IToDoListProps {
  todos: IToDo[];
};

export default function ToDoList( { todos }: IToDoListProps ): ReactElement {

  return (
    <>
      <h1>ToDos:</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <ToDo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  )
}
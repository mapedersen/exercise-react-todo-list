import { ReactElement } from "react";
import { IToDo } from "../interfaces";

interface IToDoProps {
  todo: IToDo;
}

export default function ToDo( {todo}: IToDoProps): ReactElement {
  const { title, isDone } = todo;
  return (
    <>
      <p>Todo: {title}</p>
      <p>Status: {isDone ? "Done" : "Not Done"}</p>
    </>
  )
}
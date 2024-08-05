import { ReactElement } from "react";
import { IToDo } from "../interfaces";
import styles from "./ToDo.module.css";

interface IToDoProps {
  todo: IToDo;
}

export default function ToDo( {todo}: IToDoProps): ReactElement {
  const { title, isDone } = todo;
  return (
    <>
      <article className={styles.todo}>
        <h2 className={styles.todoTitle}>ToDo: {title}</h2>
        <p className={styles.todoStatus}>Status: {isDone ? "Done" : "Not Done"}</p>
      </article>
    </>
  )
}
import { ReactElement, useContext } from "react";
import { IToDo, IToDoContext } from "../interfaces/interfaces";
import styles from "../css/ToDo.module.css";
import { ToDoContext } from "../context/ToDoContext";
import { ToDoButtons } from "./ToDoButtons";

interface IToDoProps {
  todo: IToDo;
}

export default function ToDo({ todo }: IToDoProps): ReactElement {
  const { toggleStatus } = useContext(ToDoContext) as IToDoContext;
  const { creationDate, owner, id, title, isDone } = todo;

  return (
    <article className={`${styles.todo} ${todo.isDone ? styles.completed : styles.notCompleted}`}>
      <div className="left-wrapper">
        <div className={styles.todoTitle}>
          <h2>ToDo: {title}</h2>
        </div>
        <p className={styles.todoOwner}>Owner: {owner}</p>
        <p className={styles.todoCreationDate}>Created at: {creationDate.toLocaleDateString()}</p>
        <div className={styles.todoStatus}>
          <span
            className={`material-symbols-outlined ${styles.checkboxIcon}`}
            onClick={() => toggleStatus(id)}
          >
            {isDone ? "check_box" : "check_box_outline_blank"}
          </span>
          <p className={styles.todoStatus}>Status: {isDone ? "Done" : "Not Done"}</p>
        </div>
      </div>
      <ToDoButtons todo={todo} />
    </article>
  );
}

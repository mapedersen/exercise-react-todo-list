import { ReactElement, useContext } from "react";
import { IToDo, IToDoContext } from "../interfaces/interfaces";
import styles from "../css/ToDo.module.css";
import { ToDoContext } from "../context/ToDoContext";
import { useNavigate } from "react-router-dom";

interface IToDoProps {
  todo: IToDo;
}

export default function ToDo({ todo }: IToDoProps): ReactElement {
  const { toggleStatus, removeTodo } = useContext(ToDoContext) as IToDoContext;
  const navigate = useNavigate();
  const { creationDate, owner, id, title, isDone } = todo;

  return (
    <article className={`${styles.todo} ${todo.isDone ? styles.completed : styles.notCompleted}`}>
      <div className={styles.todoTitleAndClose}>
        <h2 className={styles.todoTitle}>ToDo: {title}</h2>
        <span
          className={`material-symbols-outlined ${styles.deleteIcon}`}
          onClick={() => removeTodo(id)}
        >
          close
        </span>
      </div>
      <p className={styles.todoOwner}>Owner: {owner}</p>
      <p className={styles.todoCreationDate}>Created at: {creationDate.toLocaleDateString()}</p>
      <div className={styles.todoStatusAndControl}>
        <div className={styles.todoStatus}>
          <span
            className={`material-symbols-outlined ${styles.checkboxIcon}`}
            onClick={() => toggleStatus(id)}
          >
            {isDone ? "check_box" : "check_box_outline_blank"}
          </span>
          <p className={styles.todoStatus}>Status: {isDone ? "Done" : "Not Done"}</p>
        </div>
        <span
          className={`material-symbols-outlined ${styles.editIcon}`}
          onClick={() => navigate(`/edit-todo/${id}`)}
        >
          edit
        </span>
      </div>
    </article>
  );
}

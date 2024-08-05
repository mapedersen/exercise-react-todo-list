import { ReactElement } from "react";
import { IToDo } from "../interfaces";
import styles from "../css/ToDo.module.css";

interface IToDoProps {
  todo: IToDo;
  handleToDoAction: (id: string, action: string) => void;
}

export default function ToDo( {todo, handleToDoAction}: IToDoProps): ReactElement {
  const { id, title, isDone } = todo;

  const handleStatusUpdate = (): void => {
    handleToDoAction(id, "toggleStatus"); 
  }

  const handleRemoval = (): void => {
    handleToDoAction(id, "remove")
  }

  return (
      <article className={`${styles.todo} ${todo.isDone ? styles.completed : styles.notCompleted}`}> 
        <div className={styles.todoTitleAndClose}>
          <h2 className={styles.todoTitle}>ToDo: {title}</h2>
          <span className={`material-symbols-outlined ${styles.deleteIcon}`} onClick={handleRemoval}>
            close
          </span>
        </div>
        <div className={styles.todoStatusAndControl}>
          <span className={`material-symbols-outlined ${styles.checkboxIcon}`} onClick={handleStatusUpdate}>
              {isDone ? 'check_box' : 'check_box_outline_blank'}
          </span>
          <p className={styles.todoStatus}>Status: {isDone ? "Done" : "Not Done"}</p>
        </div>
     </article>
  )
}
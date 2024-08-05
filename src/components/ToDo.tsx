import { ReactElement, useState } from "react";
import { IToDo } from "../interfaces";
import styles from "../css/ToDo.module.css";

interface IToDoProps {
  todo: IToDo;
}

export default function ToDo( {todo}: IToDoProps): ReactElement {
  const [isDone, setIsDone] = useState<boolean>(false)
  const { title } = todo;

  const handleOnClick = (): void => {
    isDone ? setIsDone(false) : setIsDone(true); 
  }

  return (
      <article className={styles.todo}>
        <h2 className={styles.todoTitle}>ToDo: {title}</h2>
        <div className={styles.todoStatusAndControl}>
          <p className={styles.todoStatus}>Status: {isDone ? "Done" : "Not Done"}</p>
          <span className={styles.checkboxIcon}>
            <span className="material-symbols-outlined" onClick={handleOnClick}>
               {isDone ? 'check_box' : 'check_box_outline_blank'}
            </span>
          </span>
        </div>
     </article>
  )
}
import { ReactElement } from "react";
import { IToDoContext } from "../interfaces/interfaces";
import ToDo from "./ToDo";
import styles from "../css/ToDoList.module.css";
import { useOutletContext } from "react-router-dom";

export default function ToDoList(): ReactElement {
  const { todos, handleToDoAction } = useOutletContext<IToDoContext>();

  return (
    <section className={styles.todoListContainer}>
      <header className={styles.todoListHeader}>
        <h2>ToDos:</h2>
        <span className="material-symbols-outlined">filter_list</span>
      </header>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li className={styles.todoItem} key={todo.title}>
            <ToDo todo={todo} handleToDoAction={handleToDoAction} />
          </li>
        ))}
      </ul>
    </section>
  );
}

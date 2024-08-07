import { ReactElement } from "react";
import { IToDo, IToDoContext } from "../interfaces";
import ToDo from "./ToDo";
import styles from "../css/ToDoList.module.css";
import { useOutletContext } from "react-router-dom";

export default function ToDoList(): ReactElement {
  const { todos, handleToDoAction } = useOutletContext<IToDoContext>();

  return (
    <section className={styles.todoListContainer}>
      <header className={styles.todoListHeader}>
        <h1>ToDo List</h1>
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

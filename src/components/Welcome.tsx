import { ReactElement, useContext } from "react";
import styles from "../css/Welcome.module.css";
import { IToDoContext } from "../interfaces/interfaces";
import { ToDoContext } from "../context/ToDoContext";

export function Welcome(): ReactElement {
  const { todos } = useContext(ToDoContext) as IToDoContext;

  return (
    <div className={styles.About}>
      <h2>Welcome to Marcus ToDo App</h2>
      <header>
        <h2 className={styles.amountOfTOdos}>{`ToDos to do: ${todos.length}`}</h2>
      </header>
      <h3>Why use this App?</h3>
      <ul>
        <li>Helps you keep track of tasks</li>
        <li>Promote productivty</li>
        <li>Collaborate with others</li>
      </ul>
    </div>
  );
}

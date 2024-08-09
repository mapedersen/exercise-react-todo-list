import { useContext, ReactElement } from "react";
import { IToDoContext } from "../interfaces/interfaces";
import { ToDoContext } from "../context/ToDoContext";

import ToDo from "./ToDo";
import styles from "../css/ToDoList.module.css";
import { FilterDropDown } from "./FilterDropDown";

export default function ToDoList(): ReactElement {
  const { todos } = useContext(ToDoContext) as IToDoContext;

  return (
    <section className={styles.todoListContainer}>
      <header className={styles.todoListHeader}>
        <h2>ToDos:</h2>
        <FilterDropDown />
      </header>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            <ToDo todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

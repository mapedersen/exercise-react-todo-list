import { ReactElement } from "react";
import { IToDo } from "../interfaces";
import ToDo from "./ToDo";
import styles from "../css/ToDoList.module.css";

interface IToDoListProps {
  todos: IToDo[];
  onStatusChange: (targetId: string) => void;
};

export default function ToDoList( { todos, onStatusChange }: IToDoListProps ): ReactElement {
  return (
    <section className={styles.todoListContainer}>
      <header className={styles.todoListHeader}>
        <h1>ToDo List</h1>
      </header>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li className={styles.todoItem} key={todo.title}>
            <ToDo todo={todo} onStatusChange={onStatusChange}/>
          </li>
        ))}
      </ul>
    </section>
  )
}
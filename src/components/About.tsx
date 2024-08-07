import { ReactElement } from "react";
import styles from "../css/About.module.css";
import { useOutletContext } from "react-router-dom";
import { IToDoContext } from "../interfaces";

export const About = (): ReactElement => {
  const { todos } = useOutletContext<IToDoContext>();
  return (
    <div className={styles.About}>
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
};

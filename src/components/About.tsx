import { ReactElement } from "react";
import styles from "../css/About.module.css";
import { useOutletContext } from "react-router-dom";
import { IToDoContext } from "../interfaces/interfaces";

export const About = (): ReactElement => {
  const { todos } = useOutletContext<IToDoContext>();
  return (
    <div className={styles.About}>
      <header>
        <h3 className={styles.amountOfTOdos}>{`ToDos to do: ${todos.length}`}</h3>
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

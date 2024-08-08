import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "../css/NavBar.module.css";

export default function NavBar(): ReactElement {
  return (
    <nav className={styles.NavBar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/add-todo"}>Add ToDo</Link>
      <Link to={"/todos"}>ToDos</Link>
    </nav>
  );
}

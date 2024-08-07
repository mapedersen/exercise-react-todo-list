import { ReactElement } from "react";

import styles from "../css/Welcome.module.css";

export function Welcome(): ReactElement {
  return (
    <div className={styles.welcome}>
      <h2>Welcome To Marcus ToDo App</h2>
    </div>
  );
}

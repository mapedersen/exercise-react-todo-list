import { ReactElement, useContext, useState } from "react";

import styles from "../css/DropDown.module.css";
import { ToDoContext } from "../context/ToDoContext";
import { IToDoContext } from "../interfaces/interfaces";

export function FilterDropDown(): ReactElement {
  const { filterChoice, setFilterChoice } = useContext(ToDoContext) as IToDoContext;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterChoice(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <p className={styles.filterText}>Filter by:</p>
      <select value={filterChoice} onChange={handleSelect}>
        <option value="Timestamp">Timestamp</option>
        <option value="Owner">Owner</option>
      </select>
    </div>
  );
}

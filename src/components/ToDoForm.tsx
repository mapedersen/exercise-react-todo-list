import { ReactElement } from "react";
import styles from "../css/AddToDo.module.css";
import { useForm } from "./hooks/useForm";

export default function AddToDo(): ReactElement {
  const { formData, handleInputChange, handleSubmit, isEditMode } = useForm();

  return (
    <form onSubmit={handleSubmit} id="form">
      <fieldset className={styles.todoFieldset}>
        <legend>{isEditMode ? "Edit ToDo" : "Add a new ToDo"}</legend>
        <div className={styles.inputWrapper}>
          <label htmlFor="titleInput" className={styles.formLabel}>
            ToDo
          </label>
          <input
            id="titleInput"
            type="text"
            className={styles.todoInput}
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="ownerInput" className={styles.formLabel}>
            Owner
          </label>
          <input
            id="ownerInput"
            type="text"
            className={styles.todoInput}
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className={styles.addTodoButton} type="submit">
          {isEditMode ? "Update ToDo" : "Add ToDo"}
        </button>
      </fieldset>
    </form>
  );
}

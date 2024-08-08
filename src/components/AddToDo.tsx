import { ReactElement, useEffect, useState } from "react";
import styles from "../css/AddToDo.module.css";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { IToDoContext } from "../interfaces/interfaces";

export default function AddToDo(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { todos, handleAddToDo, handleToDoAction } = useOutletContext<IToDoContext>();
  const [formData, setFormData] = useState({ title: "", owner: "" });

  useEffect(() => {
    if (id) {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        setFormData({ title: todo.title, owner: todo.owner });
      }
    }
  }, [id, todos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      handleToDoAction(id, "edit", formData);
    } else {
      handleAddToDo(formData.title, formData.owner);
    }
    resetTodoInput();
    navigate("/todos");
  };

  const resetTodoInput = () => {
    setFormData({ title: "", owner: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <fieldset className={styles.todoFieldset}>
        <legend>{id ? "Edit ToDo" : "Add a new ToDo"}</legend>
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
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <button className={styles.addTodoButton} type="submit">
          {id ? "Update ToDo" : "Add ToDo"}
        </button>
      </fieldset>
    </form>
  );
}

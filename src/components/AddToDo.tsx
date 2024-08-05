import { ReactElement, useState } from "react";
import styles from "../css/AddToDo.module.css"

interface IAddToDoProps {
  onAddToDo: (title: string, author: string) => void;
}

export default function AddToDo( {onAddToDo}: IAddToDoProps ): ReactElement {
  const [formData, setFormData] = useState({title: "", owner: ""})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToDo(formData.title, formData.owner)
    resetTodoInput();
  }

  const resetTodoInput = () => {
    setFormData({title: "", owner: ""});
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} id="form" >
      <fieldset className={styles.todoFieldset}>
        <legend>Add a new ToDo</legend>
        <div className={styles.inputWrapper}>
          <label htmlFor="titleInput" className={styles.formLabel}>ToDo</label>
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
          <label htmlFor="ownerInput" className={styles.formLabel}>Owner</label>
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
        <button className={styles.addTodoButton} type="submit">Add ToDo</button>
      </fieldset>
    </form>
  )
}
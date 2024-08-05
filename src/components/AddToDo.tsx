import { ReactElement, useState } from "react";
import styles from "../css/AddToDo.module.css"

interface IAddToDoProps {
  onAddToDo: (newTodo: string) => void;
}

export default function AddToDo( {onAddToDo}: IAddToDoProps ): ReactElement {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToDo(todoTitle);
    resetTodoInput();
  }

  const resetTodoInput = () => {
    setTodoTitle("");
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} id="form" >
      <fieldset className={styles.todoFieldset}>
        <legend>Add a new ToDo</legend>
        <input 
          type="text" 
          className={styles.todoTitleInput}
          name="title"
          value={todoTitle}
          onChange={(e) => handleTitleChange(e)}
          required
        />
        <button className={styles.addTodoButton} type="submit">Add ToDo</button>
      </fieldset>
    </form>
  )
}
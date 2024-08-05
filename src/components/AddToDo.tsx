import { ReactElement, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a new ToDo</legend>
        <label htmlFor="todoTitle">ToDo</label>
        <input 
          type="text" 
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={(e) => handleTitleChange(e)}
          required
        />
        <button type="submit">Add ToDo</button>
      </fieldset>
    </form>
  )
}
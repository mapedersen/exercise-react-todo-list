import { useContext } from "react";
import { IToDo, IToDoContext } from "../interfaces/interfaces";
import { ToDoContext } from "../context/ToDoContext";
import { useNavigate } from "react-router-dom";
import styles from "../css/ToDoButtons.module.css";

interface ToDoButtonsProps {
  todo: IToDo;
}

export function ToDoButtons({ todo }: ToDoButtonsProps) {
  const { removeTodo, moveTodo } = useContext(ToDoContext) as IToDoContext;
  const navigate = useNavigate();

  const handleMove = (direction: "up" | "down") => {
    moveTodo(todo.id, direction);
  };

  const handleEdit = () => {
    navigate(`/edit-todo/${todo.id}`);
  };

  return (
    <div className={styles.todoButtons}>
      <span
        className={`material-symbols-outlined ${styles.deleteIcon}`}
        onClick={() => removeTodo(todo.id)}
      >
        close
      </span>
      <span
        className={`material-symbols-outlined ${styles.moveIcon}`}
        onClick={() => handleMove("up")}
      >
        arrow_upward
      </span>
      <span
        className={`material-symbols-outlined ${styles.moveIcon}`}
        onClick={() => handleMove("down")}
      >
        arrow_downward
      </span>
      <span className={`material-symbols-outlined ${styles.editIcon}`} onClick={handleEdit}>
        edit
      </span>
    </div>
  );
}

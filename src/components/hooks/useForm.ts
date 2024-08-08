import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IToDoContext } from "../../interfaces/interfaces";
import { ToDoContext } from "../../context/ToDoContext";

interface FormData {
  title: string;
  owner: string;
}

export function useForm() {
  const { todos, addToDo, editTodo } = useContext(ToDoContext) as IToDoContext;
  const [formData, setFormData] = useState<FormData>({ title: "", owner: "" });

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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
      editTodo(id, formData);
    } else {
      addToDo(formData.title, formData.owner);
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

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetTodoInput,
    isEditMode: !!id,
  };
}

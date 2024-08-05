import ToDoList from "./components/ToDoList";
import { ToDos } from "./data";

export function App() {
  return (
    <>
      <ToDoList todos={ToDos}/>
    </>
  );
}

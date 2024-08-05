import ToDoList from "./components/ToDoList";
import { ToDos } from "./data";

import "./app.css"

export function App() {
  return (
    <div className="App">
      <ToDoList todos={ToDos}/>
    </div>
  );
}

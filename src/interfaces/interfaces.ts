export interface IToDo {
  creationDate: Date;
  owner: string;
  id: string;
  title: string;
  isDone: boolean;
}

export interface IToDoContext {
  todos: IToDo[];
  addToDo: (title: string, owner: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, updatedData: { title: string; owner: string }) => void;
  toggleStatus: (id: string) => void;
}

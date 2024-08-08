export interface IToDo {
  creationDate: Date;
  owner: string;
  id: string;
  title: string;
  isDone: boolean;
}

export interface IToDoContext {
  todos: IToDo[];
  handleAddToDo: (title: string, owner: string) => void;
  handleToDoAction: (
    id: string,
    action: string,
    updatedData?: { title: string; owner: string }
  ) => void;
}

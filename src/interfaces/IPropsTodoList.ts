import { ITask } from "./ITask";

export default interface IPropsTodoList {
    todos: ITask[],
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string, finished: boolean) => void;
    updateTask: (title: string, id: string) => void;
    editTask: (id: string) => void;
}
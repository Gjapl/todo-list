import { ITask } from "./ITask";

export interface IPropsTask {
    task: ITask;
    deleteTodo: (id: string) => void;
    editTask: (id: string) => void;
    toggleTodo: (id: string, finished: boolean) => void;
}
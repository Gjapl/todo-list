import { ITask } from "./ITask";

export interface IPropsTask {
    task: ITask,
    deleteTodo: Function,
    toggleTodo: Function,
    editTask: Function
}
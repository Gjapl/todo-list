import { ITask } from "./ITask";

export default interface IPropsTodoList {
    todos: ITask[],
    deleteTodo: Function,
    toggleTodo: Function,
    updateTask: Function,
    editTask: Function
}
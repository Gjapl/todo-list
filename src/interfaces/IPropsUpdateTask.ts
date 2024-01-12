import { ITask } from "./ITask"

export default interface IPropsUpdateTask {
    task: ITask;
    updateTask: (title: string, id: string) => void;
}
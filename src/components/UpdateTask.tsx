import { useState } from "react";
import IPropsUpdateTask from "../interfaces/IPropsUpdateTask";

export function UpdateTask(props: IPropsUpdateTask) {
    const [task, setTask] = useState<string>(props.task.title);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (task === "") return;

        props.updateTask(task, props.task.id);

        setTask("");
    }

    return (
        <li key={props.task.id}>
            <form onSubmit={handleSubmit} className="task">
                <div className="task-input-edit">
                    <input value={task} type="text" name="task" id="task" placeholder='Edit the task...' onChange={(e) => setTask(e.target.value)} />
                </div>
                <button className="btn btn-update">Update</button>
            </form>
        </li>
    );
}
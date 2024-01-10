import { useState } from "react";
import IPropsNewTaskForm from '../interfaces/IPropsNewTaskForm';

export function NewTaskForm(props: IPropsNewTaskForm) {
    const [task, setTask] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (task === "") return;
        
        props.addTask(task);

        setTask("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-task-form">
            <label htmlFor="task">New Task</label>
            <div className="add-task">
                <input value={task} type="text" name="task" id="task" placeholder='Add a new task here...' onChange={(e) => setTask(e.target.value)} />
                <button className="btn">Add</button>
            </div>
        </form>
    );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { IPropsTask } from '../interfaces/IPropsTask';

export function Task(props: IPropsTask) {
    return (
        <li className="task" key={props.task.id}>
            <div>
                <input id={props.task.id} type="checkbox" checked={props.task.finished} onChange={(e) => props.toggleTodo(props.task.id, e.target.checked)} />
                <label htmlFor={props.task.id}>{props.task.title}</label>
            </div>
            <div>
                <FontAwesomeIcon className='icon' icon={faPenToSquare} onClick={() => props.editTask(props.task.id)} />
                <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => props.deleteTodo(props.task.id)} />
            </div>
        </li>
    );
}
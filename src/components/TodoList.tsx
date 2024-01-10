import IPropsTodoList from '../interfaces/IPropsTodoList';
import { UpdateTask } from './UpdateTask';
import { Task } from './Task';

export function TodoList(props: IPropsTodoList) {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.length === 0 && "No Todos"}
                {props.todos.map((todo) => {
                    if (todo.isEditing === true) {
                        return <UpdateTask task={todo} updateTask={props.updateTask} key={todo.id} />
                    }
                    else {
                        return <Task task={todo} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo} editTask={props.editTask} key={todo.id} />
                    }
                })}
            </ul>
        </div>
    );
}
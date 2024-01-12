import { NewTaskForm } from './components/NewTaskForm';
import { TodoList } from './components/TodoList';
import { ITask } from "./interfaces/ITask";
import { useEffect, useState } from 'react';

export default function App() {
  const [todoList, setTodoList] = useState<ITask[]>(() => {
    const localValue = localStorage.getItem("TODOS");

    if (localValue == null) {
      return [];
    }
    else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todoList));
  }, [todoList]);

  function addTask(title: string) {
    setTodoList((currentTodoList): ITask[] => {
      return [...currentTodoList, { id: crypto.randomUUID(), title, finished: false, isEditing: false }];
    });
  }

  function deleteTodo(id: string) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== id);
    })
  }

  function editTask(id: string) {
    setTodoList((currentTodoList): ITask[] => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        else {
          return todo;
        }
      })
    })
  }

  function toggleTodo(id: string, finished: boolean) {
    setTodoList((currentTodoList): ITask[] => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, finished };
        }
        else {
          return todo;
        }
      });
    });
  }

  function updateTask(title: string, id: string) {
    setTodoList((currentTodoList): ITask[] => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, title, isEditing: !todo.isEditing };
        }
        else {
          return todo;
        }
      })
    })
  }

  return (
    <div className='todo-list-app'>
      <NewTaskForm addTask={addTask} />
      <TodoList todos={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTask={editTask} updateTask={updateTask} />
    </div>
  )
}
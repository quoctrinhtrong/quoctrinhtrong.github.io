import React, { useEffect } from 'react';

// Import components
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

// Import interfaces
import { TodoInterface } from './interfaces';

// Import styles
import './styles/styles.css';

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  useEffect(()=> {
    console.log('todos: ', todos);
  }, [todos])

  // Creating new todo item
  const handleTodoCreate = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.push(todo);
    setTodos(newTodosState);
  }

  // Update todo item
  const hanldeTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find((todo: TodoInterface) => todo.id = id)!.text = event.target.value;
    setTodos(newTodosState);
  }

  // Remove existing todo item
  const hanldeTodoRemove = (id: string) => {
    const newTodosState = todos.filter((todo: TodoInterface) => todo.id !== id);
    setTodos(newTodosState);
  }

  // Handle todo completed
  const hanldeTodoComplete = (id: string) => {
    const newTodosState: TodoInterface[] = [...todos];
    let index: number = newTodosState.findIndex(todo => todo.id === id);
    newTodosState[index].isCompleted = !newTodosState[index].isCompleted;
    setTodos(newTodosState);
  }

  // Check if todo item has title
  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length === 0) {
      event.target.classList.add('todo-input-error');
    } else {
      event.target.classList.remove('todo-input-error');
    }
  }

  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        handleTodoBlur={handleTodoBlur}
        handleTodoRemove={hanldeTodoRemove}
        handleTodoUpdate={hanldeTodoUpdate}
        hanldeTodoComplete={hanldeTodoComplete}
      />
    </div>
  )
}

export default TodoListApp;


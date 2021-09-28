import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { ITodo } from './types';

const initialTodo: ITodo[] = [
  {
    text: 'Walk the dog',
    completed: false,
  },
  {
    text: 'Write app',
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo = (selectedTodo: ITodo) => {
    const newTodos = todos.map(todo => todo === selectedTodo ? {...todo, completed: !todo.completed } : todo);
    setTodos(newTodos);
  }

  const addTodo = (text: string) => {
    setTodos([...todos, {text: text, completed: false}]);
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;

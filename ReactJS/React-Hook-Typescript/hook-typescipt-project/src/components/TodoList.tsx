import React from 'react';
import { ITodo } from '../types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    todos: ITodo[],
    toggleTodo: Function
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <div>
            {todos.map((todo, index) => <TodoListItem key={todo.text + index} todo={todo} toggleTodo={toggleTodo}/>)}
        </div>
    )
}
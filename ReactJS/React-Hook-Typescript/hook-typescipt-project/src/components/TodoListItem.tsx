import * as React from  'react';
import { ITodo } from '../types';
import './index.scss'

interface TodoListItemProps {
    todo: ITodo,
    toggleTodo: Function
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <li className='todo-list__item'>
            <label className='todo-list__item__label' style={{textDecoration: todo.completed ? 'line-through' : undefined}}>
                <input type="checkbox" checked={todo.completed} onClick={() => toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
    )
}


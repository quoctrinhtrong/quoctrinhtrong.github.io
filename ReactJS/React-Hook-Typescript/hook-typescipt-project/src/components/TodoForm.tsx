import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: Function
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target) {
            setText(event.target.value);
        }
    }

    const onAddTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form>
            <input type="text" onChange={(e) => onChangeText(e)} />
            <button type='submit' onClick={(e) => onAddTodo(e)}>Submit</button>
        </form>
    )
}
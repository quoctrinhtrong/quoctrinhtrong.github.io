import React from 'react';
import shortid from 'shortid';

import {TodoInterface, TodoFormInterface} from '../interfaces';

const TodoForm = (props: TodoFormInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [formState, setFormState] = React.useState('');

    // Handle todo input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value);
    }

    // Handle 'Enter' in todo input
    const handleInputEnter = (event: React.KeyboardEvent) => {
        // Check for 'Enter'
        if(event.key === 'Enter' && formState) {
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false,
            }

            props.handleTodoCreate(newTodo);

            setFormState('');
            if(inputRef && inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type='text'
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm;
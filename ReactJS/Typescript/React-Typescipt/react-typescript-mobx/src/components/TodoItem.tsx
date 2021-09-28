import React, {useState} from 'react';
import TodoItemClass from '../stores/todo-item';
import { useStore } from "../helpers/use-store";
import { onEnterPress } from '../helpers/use-enter';

interface Props {
    todo: TodoItemClass;
}

const TodoItem = ({todo}: Props) => {
    const todoList = useStore();
    const [newText, setText] = useState(todo.text);
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
        todo.updateText(newText);
        setEdit(false);
        setText('');
    }

    return (
        <div className='todo-item'>
            {
                isEditing ? (
                    <div>
                        <input type="text" value={newText} onKeyDown={onEnterPress(saveText)} onChange={(e) => setText(e.target.value)}/>
                        <button onClick={saveText}>Save</button>
                    </div>
                ):(
                    <div>
                        <span>{todo.text}</span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={()=> todoList.removeTodo(todo)}>X</button>
                    </div>
                )
            }
        </div>
    )
}

export default TodoItem;
import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers';


const TodoForm = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todo, setTodo] = useState('');

    const handleChanges = (e) => {
        setTodo(e.target.value);
    }

    const addNewTodo = (e) => {
        dispatch({ type: "ADD_TODO", payload: todo });
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo} onChange={handleChanges} />
                <button onClick={addNewTodo}>Add New Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;
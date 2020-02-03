import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers';


const Todo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todo, setTodo] = useState('hey');

    return (
        <div>
            <p>{state.item}</p>
        </div>
    )
}

export default Todo;
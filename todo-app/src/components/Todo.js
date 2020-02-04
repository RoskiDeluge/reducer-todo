import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers';


const Todo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            <div>{state.item}</div>
            <div>{state.id}</div>
        </div>
    )
}

export default Todo;
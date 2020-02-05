import React, { useReducer, useState } from "react";
import { initialState, toDoReducer } from "../reducers";

const Todo = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  //   const handleAdd = e => {
  //     dispatch({ type: "TOGGLE_ADD" });
  //   };

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleUpdateItem = e => {
    dispatch({ type: "ADD_TASK", payload: newTodo });
    // console.log(state.items);
  };

  return (
    <div>
      {/* <button onClick={handleAdd}>
        Add item
      </button>
      {!state.completed ? (
        <h2>{state.item}</h2>
      ) : (
        <div>
          <h2>{state.item}</h2>
          <input
            type="text"
            name="newItemText"
            value={newTaskText}
            onChange={handleChanges}
          />
          <button onClick={handleUpdateItem}>Add Task</button>
          <div>
                {state.toDoReducer.map(todo => {
                return todo.item
                })}   
        </div>
        </div>
      )} */}

      <div>
        <input
          type="text"
          name="newItemText"
          value={newTodo}
          onChange={handleChanges}
        />
        <button onClick={handleUpdateItem}>Add Task</button>
      </div>
      <ul>
        {state.items.map(todo => {
          return <li>{todo.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;

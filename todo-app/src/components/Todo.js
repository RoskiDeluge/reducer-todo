import React, { useReducer, useState } from "react";
import { initialState, toDoReducer } from "../reducers";
import "./Todo.css";

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

  const handleToggleItem = e => {
    e.preventDefault();
    dispatch({ type: "TOGGLE_TASK", payload: state.items.completed });
    console.log("rd: handleToggleItem: ", state);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="newItemText"
          value={newTodo}
          onChange={handleChanges}
        />
        <button onClick={handleUpdateItem}>Add Task</button>
      </div>
      <div>
        {state.items.map(todo => {
          console.log(todo.completed)
          return (
            <div onClick={handleToggleItem} className={todo.completed ? "strike" : "no"}>
              {todo.item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

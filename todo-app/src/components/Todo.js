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
    dispatch({ type: "TOGGLE_TASK", payload: true });
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
          console.log(todo.id)
          return (
            <div className={todo.completed ? "strike" : "no"}>
              <div className="item" onClick={handleToggleItem}>{todo.item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

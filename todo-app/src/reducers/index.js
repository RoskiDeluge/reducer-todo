export const initialState = {
  //Important to put arrays within the state object, which are then accessible via dot notation
  items: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ADD":
      return {
        ...state,
        completed: !state.completed
      };
    case "ADD_TASK":
      // I tried to return an object direclty, but I needed to return an array within the state object, as below
      // return {
      //   ...state,
      //   item: action.payload,
      //   completed: false,
      //   id: new Date()
      // };
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, items: [...state.items, newTodo] };
    default:
      return state;
  }
};

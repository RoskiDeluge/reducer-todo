export const initialState = {
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

    // {
    //     ...state,
    //     item: action.payload,
    //     completed: false,
    //     id: Date.now()
    // };

    // return state.map(item => {
    //     return {
    //         item: action.payload,
    //         completed: false,
    //         id: new Date()
    //     }
    // })
    default:
      return state;
  }
};

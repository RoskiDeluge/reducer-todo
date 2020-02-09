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
    case "ADD_TASK":
      // I tried to return an object direclty, but I needed to return an array within the state object, as below
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, items: [...state.items, newTodo] };
    case "TOGGLE_TASK": {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload ) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return {
            ...item,
          }
        })
      }
    }
    case "FILTER_TASK": {
      return {
        ...state, 
        items: state.items.filter(item => {
          if (item.completed === !action.payload) {
            return {
              ...item
            }
          }
        })
      }
    } 
    default:
      return state;
  }
};

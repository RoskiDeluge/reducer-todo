
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
    // case "TOGGLE_ADD":
    //   return {
    //     ...state,
    //     completed: !state.completed
    //   };
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
          console.log("rd: TOGGLE_TASK item", item);
          // console.log("rd: item.completed ", item.completed)
          // console.log("rd: action.payload", action.payload)
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

      // {
      //   ...state,
      //   items: state.items.map(item => {
      //     console.log("rd: TOGGLE_TASK", item);
      //     if(item.id !== action.payload.id ) {
      //       return {
      //         ...item, 
      //         completed: !item.completed
      //       };
      //     }
      //     return item;
      //   })
      // }

    default:
      return state;
  }
};

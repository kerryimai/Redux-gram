// reducer takes in 2 things: 1. action, 2. copy of current state
function posts(state = [], action) {
  switch(action.type) {
    case "INCREMENT_LIKES" :
    console.log("Increment likes!");
    const i = action.index;
    return [
      ...state.slice(0,i),
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1),
    ]
    default:
      return state;
  }
}

export default posts;

import { createStore } from "redux";

const reducer = (
  state = {
    todos: [
      { id: 1, description: "study react" },
      { id: 2, description: "walk the dog" },
      { id: 3, description: "do laundry" }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      const todo = { id: state.todos.length + 1, description: action.payload };
      return { todos: [...state.todos, todo] };
    default:
      return state;
  }
};

export const store = createStore(reducer);

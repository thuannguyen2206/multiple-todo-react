import { ADD_TODO, TOGGLE_TODO_STATUS, REMOVE_TODO } from "../constants";

const initial = [
  { id: 1, name: "Learn JavaScript", completed: false },
  { id: 2, name: "Learn ReactJs", completed: true },
  { id: 3, name: "Learn Redux", completed: false },
];

const TodoReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO_STATUS:
      const newTodo = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return newTodo;
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;

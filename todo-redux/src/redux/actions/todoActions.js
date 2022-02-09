import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS } from "../constants";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const toggleTodoStatus = (id) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: id,
  };
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export { addTodo, toggleTodoStatus, removeTodo };

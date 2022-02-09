import { combineReducers } from "redux";

import TodoReducer from "./todo";
import StatusReducer from "./status";

const rootReducer = combineReducers({
  status: StatusReducer,
  todos: TodoReducer,
});

export default rootReducer;

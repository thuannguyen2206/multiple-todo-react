import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus } from "../redux/actions/todoActions";

export default function Todo({ id, name, completed }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggleStatus = () => {
    const action = toggleTodoStatus(id);
    dispatch(action);
  };

  return (
    <>
      <div className={`todo_item ${completed ? "completed" : ""}`}>
        <div className="checker">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggleStatus}
          />
        </div>
        <span className="task_name">{name}</span>
        <span className="remove-todo" onClick={handleRemove}>
          &#10006;
        </span>
      </div>
    </>
  );
}

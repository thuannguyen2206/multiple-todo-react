import React from "react";

export default function Todo({ item, onToggleComplete, onRemoveTodo }) {
  return (
    <>
      <div className={`todo_item ${item.completed ? "completed" : ""}`}>
        <div className="checker">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggleComplete(item.id)}
          />
        </div>
        <span className="task_name">{item.name}</span>
        <span className="remove-todo" onClick={() => onRemoveTodo(item.id)}>
          &#10006;
        </span>
      </div>
    </>
  );
}

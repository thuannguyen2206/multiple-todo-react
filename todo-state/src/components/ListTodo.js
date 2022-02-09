import React from "react";
import Todo from "./Todo";

export default function ListTodo({ todos, onRemove, onToggle }) {
  return (
    <>
      <div className="todo_list">
        {todos &&
          todos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              onToggleComplete={onToggle}
              onRemoveTodo={onRemove}
            />
          ))}
      </div>
    </>
  );
}

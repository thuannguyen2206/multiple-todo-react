import React from "react";
import { useSelector } from "react-redux";
import { TypeStatus } from "../services/Common";
import Todo from "./Todo";

export default function ListTodo() {
  const status = useSelector((select) => select.status);
  const todos = useSelector((select) => {
    const result =
      status === TypeStatus.All
        ? select.todos
        : status === TypeStatus.Active
        ? select.todos.filter((item) => !item.completed)
        : status === TypeStatus.Completed
        ? select.todos.filter((item) => item.completed)
        : select.todos;

    return result;
  });

  return (
    <>
      <div className="todo_list">
        {todos &&
          todos.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              name={item.name}
              completed={item.completed}
            />
          ))}
      </div>
    </>
  );
}

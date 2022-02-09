import "./App.css";
import React, { useState } from "react";
import ListTodo from "./components/ListTodo";
import CreateTodo from "./components/CreateTodo";
import Status from "./components/Status";
import { TypeStatus } from "./services/Common";

function App() {
  // todos=[{id: , name: , completed: true}, ...]
  const [todos, setTodo] = useState([
    { id: 1, name: "Learn JavaScript", completed: true },
    { id: 2, name: "Learn ReactJs", completed: false },
  ]);

  const [status, setStatus] = useState(TypeStatus.All);

  const handleRemove = (data) => {
    if (data > 0) {
      const newTodo = todos.filter((item) => item.id !== data);
      setTodo(newTodo);
    }
  };

  const handleToggle = (data) => {
    if (data > 0) {
      const newTodo = todos.map((item) =>
        item.id === data ? { ...item, completed: !item.completed } : item
      );
      setTodo(newTodo);
    }
  };

  const handleCreateTask = (data) => {
    if (data) {
      setTodo([...todos, data]);
    }
  };

  const handleChangeStatus = (data) => {
    setStatus(data);
  };

  return (
    <>
      <div className="container">
        <CreateTodo onCreateTask={handleCreateTask} />
        <Status status={status} onChangeStatus={handleChangeStatus} />
        <ListTodo
          todos={
            status === TypeStatus.All
              ? todos
              : status === TypeStatus.Active
              ? todos.filter((item) => !item.completed)
              : status === TypeStatus.Completed
              ? todos.filter((item) => item.completed)
              : todos
          }
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;

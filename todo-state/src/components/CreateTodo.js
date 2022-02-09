import React, { useState, useRef } from "react";

export default function CreateTodo({ onCreateTask }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  function generateId() {
    return Math.random();
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleCreateTask = () => {
    if (input.length > 0) {
      onCreateTask({
        id: generateId(),
        name: input,
        completed: false,
      });
    }
    setInput("");
    inputRef.current.focus();
  };

  return (
    <>
      <form action="" onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Add new task"
          onChange={handleChangeInput}
          ref={inputRef}
          value={input}
        />
        <button type="button" onClick={handleCreateTask}>
          Add Task
        </button>
      </form>
    </>
  );
}

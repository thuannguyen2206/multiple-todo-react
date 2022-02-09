import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

export default function CreateTodo() {
  const dispatch = useDispatch();
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
      const action = addTodo({
        id: generateId(),
        name: input,
        completed: false,
      });
      dispatch(action);
      setInput("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form action="" onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={handleChangeInput}
          ref={inputRef}
        />
        <button type="button" onClick={handleCreateTask}>
          Add Task
        </button>
      </form>
    </>
  );
}

import React, { useState } from "react";
import './Input.css'

const Input = ({ increaseCountTask, addTask }) => {
  const [value, setValue] = useState("");
  const [count, setCount]   = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTask(value);
      increaseCountTask(count)
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;

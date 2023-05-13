import React from "react";
import  './Task.css'

const Task = ({ task, index, completeTask, removeTask,decreaseCountTask }) => {

  const handleRemoveTask = () => {
    decreaseCountTask(); // Call the decreaseCountTask function
    removeTask(index); // Call the removeTask function with the index parameter
  };
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>Complete</button>
      <button onClick={handleRemoveTask}>x</button>
    </div>
  );
};

export default Task;

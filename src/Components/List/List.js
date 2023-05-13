import React from "react";
import Task from "../Task/Task";
import './List.css'


const List = ({ tasks, completeTask, removeTask,decreaseCountTask }) => {

  return (
    <div>
      {
       tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
          decreaseCountTask ={decreaseCountTask}
        />
      ))
     }
    </div>
  );
};

export default List;

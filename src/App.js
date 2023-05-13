import React, { useState } from "react";
import Input from "./Components/Input/Input";
import List from './Components/List/List'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Add your task here",
      completed: false,
    },
    {
      title: "And mark complete Like this",
      completed: true,
    },
  ]);
  const [count, setCount] =useState(0);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const increaseCountTask = ()=>{
     setCount(count + 1 )
     
  };

  const decreaseCountTask = () =>{
    setCount(count - 1 );
    if(count<1){
      setCount(0)
     }
  }


  return (
    <div className="App">
      <h1>Pending task ({count}) </h1>
      
      <List
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        decreaseCountTask ={decreaseCountTask}
        
      />
      <Input increaseCountTask ={increaseCountTask} addTask={addTask} />

    </div>
  );
};

export default App;

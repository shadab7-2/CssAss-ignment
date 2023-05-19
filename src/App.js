import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Molecules/Home/Home';
import Quiz from './Components/Molecules/Quiz/Quiz';
import { quizQuestions } from './Data/QuizData';
import './App.css'
const App = () => {
  
  return (
      <> 
     
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/quiz' Component={Quiz}/>
        </Routes>
      </Router>
      
      </>
    
    
  );
};

export default App;

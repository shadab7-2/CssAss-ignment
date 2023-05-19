import React, { useState } from 'react';
import { quizQuestions } from '../../../Data/QuizData';
import './Quiz.css';
import Result from '../../Result/Result';

const Quiz = () => {
  const [currentQue, setCurrentQue] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false)

  const handleClick = () => {
    if (currentQue < quizQuestions.length - 1) {
      setCurrentQue(currentQue + 1);
    }else{
      setShowResult(true)
    };
    if (quizQuestions[currentQue].answer === selectedOption) {
      setScore(score + 2);
    }
    setSelectedOption(null);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    
  };

  return (
    <div className="container">
      {
        ( showResult? (
          <Result score = {score}/>
        ): 
        
        <> 
      <div className="ques_container">
        <h3 className="ques_container">{currentQue + 1}</h3>
        <h3 className="ques_container">{quizQuestions[currentQue].question}</h3>
      </div>
      <div className="opt_container">
        {quizQuestions[currentQue].options.map((option, index) => (
          <div key={index} className="opt">
            <button
              className={`optionbtn ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
      <input className="nextbtn" type="button" value="Next" id="next_btn" onClick={handleClick}></input>
      </>
      )}
    </div>
  );
};

export default Quiz;

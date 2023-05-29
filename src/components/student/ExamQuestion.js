import React, { useState } from 'react';

const ExamQuestion = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name={`question${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <p>Selected Answer: {selectedAnswer}</p>
      {selectedAnswer === question.correctAnswer ? (
        <p>Correct Answer!</p>
      ) : (
        <p>Incorrect Answer!</p>
      )}
    </div>
  );
};

export default ExamQuestion;

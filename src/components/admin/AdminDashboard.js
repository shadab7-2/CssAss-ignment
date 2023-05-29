
import { questions } from '../../services/question';

import React from 'react';

const AdminDashboard = () => {
  

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.text}</h3>
            <ul>
              {question.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {question.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>Click the button below to start the quiz!</p>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;

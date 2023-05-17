import React, { useState } from 'react';
import './App.css'
const WordList = () => {
  const initialWords = [
    'apple',
    'banana',
    'carrot',
    'dog',
    'elephant',
    'frog',
    'giraffe',
    'hamburger',
    'igloo',
    'jellyfish'
  ];

  const [words, setWords] = useState(initialWords);

  const handleDelete = (index) => {
    const updatedWords = [...words];
    updatedWords.splice(index, 1);
    setWords(updatedWords);
  };

  return (
    <div className='container'>
      <h1 className='heading'>Word List</h1>
      {words.map((word, index) => (
        <div key={index} className='list'>
          {word}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WordList;

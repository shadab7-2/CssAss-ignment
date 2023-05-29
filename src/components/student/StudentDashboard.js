import React, { useState, useEffect } from 'react';
import ExamQuestion from './ExamQuestion';

const StudentDashboard = () => {
  const [examQuestions, setExamQuestions] = useState([]);

  useEffect(() => {
    // Fetch the exam questions from the server or API
    // and set them in the state
    const fetchExamQuestions = async () => {
      try {
        const response = await fetch('/api/exam/questions');
        const data = await response.json();
        setExamQuestions(data);
      } catch (error) {
        console.log('Error fetching exam questions:', error);
      }
    };

    fetchExamQuestions();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {examQuestions.map((question, index) => (
        <ExamQuestion key={index} question={question} />
      ))}
    </div>
  );
};

export default StudentDashboard;

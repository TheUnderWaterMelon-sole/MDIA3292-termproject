import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionLayout from '../components/QuestionLayout';
import { dataQuestions } from '../data/dataQuestions';

function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswerClick = (change) => {
    setImageIndex((prev) => prev + change); // Allow going below zero

    if (currentIndex < dataQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/results');
    }
  };

  return (
    <div>
      <h1>Questions Page</h1>
      <QuestionLayout 
        questionData={dataQuestions[currentIndex]} 
        imageIndex={imageIndex} 
        onAnswerClick={handleAnswerClick} 
      />
    </div>
  );
}

export default Question;

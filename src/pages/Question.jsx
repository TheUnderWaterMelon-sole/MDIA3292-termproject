import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionLayout from '../components/QuestionLayout';
import { dataQuestions } from '../data/dataQuestions';

function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // 0 represents imageDefault
  const navigate = useNavigate();

  const handleAnswerClick = (change) => {
    setImageIndex((prev) => {
      let newIndex = prev + change;
      return Math.max(-5, Math.min(newIndex, 5)); // Restrict between -5 (img5) and 5 (image05)
    });

    if (currentIndex < dataQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
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

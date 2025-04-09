import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionLayout from '../components/QuestionLayout';
import { dataQuestions } from '../data/dataQuestions';

// Styles
import '../css/styles.css';


function Question() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // 0 represents imageDefault
  const navigate = useNavigate();

  const handleAnswerClick = (change) => {
    setImageIndex((prev) => {
      let newIndex = prev + change;
      return Math.max(-6, Math.min(newIndex, 6)); // Restrict between -6 (img6) and 6 (image06)
    });

    if (currentIndex < dataQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate('/results');
    }
  };

  return (
    
      <QuestionLayout 
        questionData={dataQuestions[currentIndex]} 
        imageIndex={imageIndex} 
        onAnswerClick={handleAnswerClick} 
      />
    
  );
}

export default Question;

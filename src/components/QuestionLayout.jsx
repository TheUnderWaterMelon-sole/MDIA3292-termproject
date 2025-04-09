import React from 'react';

// Images
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.jpg';
import image6 from '../assets/image-6.jpg';
import imageDefault from '../assets/image-default.jpg';
import image01 from '../assets/image01.jpg';
import image02 from '../assets/image02.jpg';
import image03 from '../assets/image03.jpg';
import image04 from '../assets/image04.jpg';
import image05 from '../assets/image05.jpg';
import image06 from '../assets/image06.jpg';

// Styles
import '../css/styles.css';


// Define image mapping
const upImages = [image01, image02, image03, image04, image05, image06]; // +1 to +5
const downImages = [image1, image2, image3, image4, image5, image6]; // -1 to -5

function QuestionLayout({ questionData, imageIndex, onAnswerClick }) {
  const { question, answerA, answerB } = questionData;

  // Determine which image to display
  let imageSrc;
  if (imageIndex === 0) {
    imageSrc = imageDefault;
  } else if (imageIndex > 0) {
    imageSrc = upImages[imageIndex - 1]; // Up images (1 to 5)
  } else {
    imageSrc = downImages[Math.abs(imageIndex) - 1]; // Down images (-1 to -5)
  }

  return (
    <div className='question-container'>
      <h3 className='question'>{question}</h3>
      <div className="image-container">
        <img src={imageSrc} alt="Question"  />
      </div>
      <div className="answers-container">
        <div className="option">
    
          <button className="btn btn-a" onClick={() => onAnswerClick(1)}>{answerA}</button>
        </div>
        <div className="option">
         
          <button className="btn btn-b" onClick={() => onAnswerClick(-1)}>{answerB}</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionLayout;

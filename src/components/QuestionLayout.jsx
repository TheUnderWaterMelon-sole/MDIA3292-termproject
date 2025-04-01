import React from 'react';

// Images
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.png';
import imageDefault from '../assets/image-default.jpg';
import image01 from '../assets/image01.jpg';
import image02 from '../assets/image02.jpeg';
import image03 from '../assets/image03.jpg';
import image04 from '../assets/image04.jpeg';
import image05 from '../assets/image05.jpg';

// Define image mapping
const upImages = [image01, image02, image03, image04, image05]; // +1 to +5
const downImages = [image1, image2, image3, image4, image5]; // -1 to -5

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
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{question}</h3>
      <div className="image-container">
        <img src={imageSrc} alt="Question" style={{ width: '100px' }} />
      </div>
      <div className="answers-container">
        <div className="option">
          <p>{answerA}</p>
          <button className="btn btn-a" onClick={() => onAnswerClick(1)}>A</button>
        </div>
        <div className="option">
          <p>{answerB}</p>
          <button className="btn btn-b" onClick={() => onAnswerClick(-1)}>B</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionLayout;

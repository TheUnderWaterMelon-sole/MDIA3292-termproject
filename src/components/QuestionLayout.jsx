import React from 'react';

// images
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.png';
import imageDefault from '../assets/image-default.jpg';
import image01 from '../assets/image01.jpg';
import image03 from '../assets/image03.jpg';
import image04 from '../assets/image04.jpeg';
import image05 from '../assets/image05.jpg';

const images = [
  imageDefault, // index 0
  image01,      // index 1
  image1,       // index 2
  image2,       // index 3
  image3,       // index 4
  image4,       // index 5
  image5,       // index 6
  image03,      // index 7
  image04,      // index 8
  image05,      // index 9
];

function QuestionLayout({ questionData, imageIndex, onAnswerClick }) {
  const { question, answerA, answerB } = questionData;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{question}</h3>
      <div className="image-container">
        <img src={images[imageIndex]} alt="Question" style={{ width: '100px' }} />
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

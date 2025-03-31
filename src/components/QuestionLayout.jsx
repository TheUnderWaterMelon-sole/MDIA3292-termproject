import React from 'react';

//styles
import '../css/styles.css';

function QuestionLayout({ image, question, answerA, answerB }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>

      <h3>{question}</h3>
      <div className="image-container">
        <img src={image} alt="Question" style={{ width: '100px' }} />
      </div>
      <div className="answers-container">
        <div class="option">
            <p>{answerA}</p>
            <button id="optionA" class="btn btn-a">A</button>
        </div>
        <div class="option">
            <p>{answerB}</p>
            <button id="optionb" class="btn btn-b">B</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default QuestionLayout;
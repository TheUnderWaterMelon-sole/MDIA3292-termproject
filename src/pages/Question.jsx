import React from 'react';
import QuestionLayout from '../components/QuestionLayout';
import { dataQuestions } from '../data/dataQuestions';



function Question() {
  return (
    <div>
      <h1>Questions Page</h1>
      {dataQuestions.map((question) => (
        <QuestionLayout key={question.id} {...question} />
      ))}
    </div>
  );
}

export default Question;


import React from 'react';
import MyOptions from '../MyOptions/MyOptions';

const Question = ({singleQuestion}) => {
  const {question,options,id} = singleQuestion;
  console.log(singleQuestion.id);
  
  return (
    <div>
      <p>{singleQuestion.question}</p>
      {
        options.map(options=> <MyOptions 
         key={singleQuestion.id}
          options={options}
          ></MyOptions>)
      }
    </div>
  );
};

export default Question;
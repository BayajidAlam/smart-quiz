import React from 'react';
import MyOptions from '../MyOptions/MyOptions';

const Question = ({singleQuestion}) => {
  const {question,options,id} = singleQuestion;
  console.log(singleQuestion.id);
  
  return (
    <div className='bg-slate-300 my-4 p-4 rounded shadow-xl'>
      <p className='text-xl'>{question}</p>
    <div>
    {
        options.map(options=> <MyOptions 
         key={singleQuestion.id}
          options={options}
          ></MyOptions>)
      }
    </div>
    </div>
  );
};

export default Question;
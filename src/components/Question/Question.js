import React from 'react';
import MyOptions from '../MyOptions/MyOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({singleQuestion}) => {
  const {question,options,id,correctAnswer} = singleQuestion;
  console.log(singleQuestion)
  return (
    <div className='bg-slate-300 my-4 p-4 rounded shadow-xl'>

      <div className='flex justify-around items-center'>
      <p className='text-xl my-4'>{question}</p>
      <FontAwesomeIcon className='items-end' icon={faEye}></FontAwesomeIcon>
      </div>

    <div className='grid grid grid-cols-2 gap-6'>
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
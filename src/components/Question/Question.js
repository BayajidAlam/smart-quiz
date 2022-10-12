import React from 'react';
import MyOptions from '../MyOptions/MyOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ( { singleQuestion } ) => {
  const { question, options, correctAnswer } = singleQuestion;
  // console.log(singleQuestion);
  const validateSelection = (target) => {
    if(target === correctAnswer){
      toast.success('Right selected!' , {autoClose: 300,  position: toast.POSITION.TOP_CENTER})
    }
    else{
      toast.warning('you selected wrong!', {autoClose: 300, position: toast.POSITION.TOP_CENTER})
    }
  }
  return (
    <div className='bg-slate-300 my-4 p-4 rounded shadow-xl'>

      <div className='flex justify-around items-center'>
      <p className='text-xl my-4'>{question}</p>
      <FontAwesomeIcon className='items-end' icon={faEye}></FontAwesomeIcon>
      </div>

    <div className='grid grid grid-cols-2 gap-6'>
    {
        options.map((options,index)=> <MyOptions 
         key={index}
        options={options}
        validateSelection={validateSelection}
          ></MyOptions>)
      }
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default Question;
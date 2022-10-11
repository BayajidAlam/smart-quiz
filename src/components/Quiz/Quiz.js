import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const data = useLoaderData()
  const {name,questions,id} = data.data
  console.log(data.data)
  return (
    <div>
      <p className='text-2xl container mx-auto'>{name}</p>
      <div className='container mx-auto'>
        {
          questions.map(singleQuestion => <Question 
            key={questions.id}
            singleQuestion={singleQuestion}
          ></Question>)
        }
      </div>
    </div>
  );
};

export default Quiz;
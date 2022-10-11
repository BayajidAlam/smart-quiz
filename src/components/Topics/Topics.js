import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const datas = useLoaderData()
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 container gap-6 justify-around container mx-auto'>
    {
        datas.data.map(data=> <Topic
        key={data.id}
        data={data}
        ></Topic>)
      }
    </div>
  );
};

export default Topics;
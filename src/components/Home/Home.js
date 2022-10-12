import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Home = () => {
  const datas = useLoaderData()
  return (
    <div>
      <div className='my-4'>
        <Banner></Banner>
      </div>
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 container gap-6 justify-around container mx-auto'>
    {
        datas.data.map(data=> <Topic
        key={data.id}
        data={data}
        ></Topic>)
      }
    </div>
    </div>
  );
};

export default Home;
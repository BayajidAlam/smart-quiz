import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ( { data } ) => {
  
  const { name, logo, total, id } = data;
  
  return (
    <div className="card card-compact w-86 mx-auto bg-slate-100 shadow-xl z-0">
    <figure><img src={logo}/></figure>
    <div className="card-body">
      <h2 className="card-title">Name: {name}</h2>
      <div className='text-start'>
        <p>Total quiz: {total}</p>
        </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link to={`/topics/${id}`}>Start exam</Link></button>
      </div>
    </div>
  </div>
  );
};

export default Topic;
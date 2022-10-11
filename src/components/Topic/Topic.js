import React from 'react';
const Topic = ({data}) => {
  console.log(data)
  const {name,logo,total} = data;
  return (
    <div className="card card-compact w-80 mx-auto bg-slate-100 shadow-xl">
    <figure><img src={logo}/></figure>
    <div className="card-body">
      <h2 className="card-title">Name: {name}</h2>
      <div className='text-start'>
        <p>Total quiz: {total}</p>
        </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Start exam</button>
      </div>
    </div>
  </div>
  );
};

export default Topic;
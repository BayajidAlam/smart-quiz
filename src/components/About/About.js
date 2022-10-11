import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto text-left px-6'>
        <p className='text-xl text-blue-300 '>about smart quiz app</p>
      <p className='text-slate-500 my-3'>Smart Quiz app is a initiave program of p-hero student forum,we came forward to make a easy environment for all student,if the can aquire knoqledge topic wise very easily</p>
      <p className='text-xl text-blue-300'>How to use Smart quiz app?</p>
      <ul className='my-3'>
        <li className='text-slate-600'>Go to "www.smart-quiz.com"</li>
        <li className='text-slate-600'>click on Topic for select your topic</li>
        <li className='text-slate-600'>Ciclk on start exam to take part on exam</li>
      </ul>
      <p className='text-xl text-blue-300'>Insight</p>
      <p className='text-slate-600 my-3'>Our insight section provide you a good knowledge about our new and old all topic,you can regular visit here to know about if there any new topic added.</p>
      <p className='text-xl text-blue-300'>About Blog</p>
      <p className='text-slate-600  my-3'>In our vlog section you can get some awesome topicwise most or frequently asked question,visit regularly to explore new technology of react</p>
    </div>
  );
};

export default About;
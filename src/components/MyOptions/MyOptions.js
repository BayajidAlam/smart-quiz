import React from 'react';

const MyOptions = ({options}) => {
  
  return (
    <div className='bg-slate-200 p-8 text-2xl rounded'>
     <form className='items-center justify-start'>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">{options}</label>
     </form>
    </div>
  );
};

export default MyOptions;
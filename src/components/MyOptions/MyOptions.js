import React from 'react';

const MyOptions = ({options}) => {
  console.log(options);
  return (
    <div>
     <form>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">{options}</label>
     </form>
    </div>
  );
};

export default MyOptions;
import React from 'react';

const ClearButton = ({ clear }) => {
  return (
    <div className='btn clear' onClick={clear}>
      Clear All
    </div>
  );
};

export default ClearButton;

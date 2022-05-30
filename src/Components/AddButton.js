import React from 'react';

const AddButton = ({ addTask }) => {
  return (
    <input type='submit' className='btn' onClick={addTask} value='Add Task' />
  );
};

export default AddButton;

import React from 'react';

import AddButton from './AddButton';
const FormSection = ({ input, addTask }) => {
  return (
    <form className='form-section'>
      <h1>Todo List</h1>
      <input
        type='text'
        className='input'
        onChange={(e) => {
          input(e.target.value);
        }}
      />
      <AddButton addTask={addTask} />
    </form>
  );
};

export default FormSection;

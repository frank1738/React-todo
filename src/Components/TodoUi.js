import React from 'react';
import AddButton from './AddButton';
import FormSection from './FormSection';
import Tasks from './Tasks';
import ClearButton from './ClearButton';

const TodoUi = ({ myTasks, addTask, deleteTask, input, update, clear }) => {
  return (
    <div className='container'>
      <FormSection input={input} addTask={addTask} />
      <Tasks myTasks={myTasks} deleteTask={deleteTask} update={update} />
      {myTasks.length > 0 ? <ClearButton clear={clear} /> : null}
    </div>
  );
};

export default TodoUi;

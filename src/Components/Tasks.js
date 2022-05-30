import React from 'react';

const Tasks = ({ myTasks, deleteTask, update }) => {
  return (
    <div className='tasks'>
      {myTasks.length > 0
        ? myTasks.map((task) => (
            <div className='task' key={task.id}>
              <input
                type='checkbox'
                name=''
                id={task.id}
                onClick={(e) => update(task.id, e)}
              />
              <p>{task.name}</p>
              <button
                className='delete-button'
                id={task.id}
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          ))
        : 'No Tasks available !'}
    </div>
  );
};

export default Tasks;

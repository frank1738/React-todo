import TodoUi from './Components/TodoUi';
import { useState } from 'react';
function App() {
  let [myId, setIndex] = useState('boy');
  const tasks = [];
  const [myTasks, updateTasks] = useState(tasks);
  const [input, setInput] = useState('');
  const addTask = (e) => {
    e.preventDefault();
    let newData = [{ id: myTasks.length + 1, name: input, completed: false }];
    updateTasks([...myTasks, ...newData]);
    setInput('');
    document.querySelector('.input').value = '';
  };

  const clearAll = () => {
    updateTasks(myTasks.filter((task) => task.completed === false));
  };

  const checkTask = (id, e) => {
    const newTask = myTasks;
    if (e.target.checked === true) {
      newTask[id - 1].completed = true;
      updateTasks(newTask);
    } else {
      newTask[id - 1].completed = false;
      updateTasks(newTask);
    }
  };

  const deleteTask = (id) => {
    updateTasks(myTasks.filter((task) => task.id !== id));
  };

  return (
    <div className='App'>
      <TodoUi
        myTasks={myTasks}
        addTask={addTask}
        deleteTask={deleteTask}
        input={setInput}
        update={checkTask}
        clear={clearAll}
      />
    </div>
  );
}

export default App;

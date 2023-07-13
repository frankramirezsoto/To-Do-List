import Task from './Task';
import InputTask from './InputTask';
import { useState } from 'react';

function TaskApp() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }

  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    })
    setTasks(updatedTasks)
  };

    const removeTask = id => {
      const updatedTasks = tasks.filter(task => task.id !== id)
      setTasks(updatedTasks);
    };

    return (
      <div className="mx-auto w-11/12 sm:w-9/12 xl:w-6/12 bg-sky-300 p-5 rounded-3xl">
        <h2 className='text-white text-3xl mb-5'>Tasks</h2>
        <div className="mb-5">
          <InputTask onSubmit={addTask} />
        </div>
        <div className=' rounded-3xl min-h-[35rem] bg-white p-5'>
          {
            tasks.map((task) =>
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                isCompleted={task.isCompleted}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            )
          }
        </div>
      </div>
    )
  }

  export default TaskApp;
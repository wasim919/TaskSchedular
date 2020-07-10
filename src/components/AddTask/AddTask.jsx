import React from 'react';

export default function AddTask({
  onAddTaskChange,
  tasks,
  servers,
  addTask,
  modifyTasks,
}) {
  // const dispatchToStore = (i) => {
  //   dispatch({
  //     type: 'ALLOCATE_SERVER',
  //     payload: {
  //       index: i,
  //     },
  //   });
  //   dispatch({
  //     type: 'ADD_TASK',
  //     payload: {
  //       serverAllocated: i,
  //     },
  //   });
  // };

  const addTaskHere = (e) => {
    addTask(e);
  };

  return (
    <div>
      <div className='input-group sm-4'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the number of tasks'
          onChange={(e) => onAddTaskChange(e)}
        />
      </div>
      <button className='btn btn-primary' onClick={(e) => addTaskHere(e)}>
        Add Task
      </button>
    </div>
  );
}

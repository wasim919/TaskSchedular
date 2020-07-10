import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddTask({ onAddTaskChange, tasks, servers, addTask }) {
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
    console.log(tasks.length);
    tasks.map((task) => console.log(task));
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

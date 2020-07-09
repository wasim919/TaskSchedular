import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../';

export default function Tasks() {
  const tasks = useSelector((state) => state.taskManager.tasks);
  return tasks.length === 0 ? (
    <></>
  ) : (
    <div className='row'>
      <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2'>
        <ul className='list-group'>
          {tasks.map((task, index) => (
            <Task task={task} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { Task } from '../';

export default function Tasks({ tasks, deleteTask }) {
  return tasks.length === 0 ? (
    <></>
  ) : (
    <div className='row'>
      <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2'>
        <ul className='list-group'>
          {tasks.map((task, index) => (
            <Task
              task={task}
              key={index}
              index={index}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

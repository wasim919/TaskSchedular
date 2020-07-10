import React from 'react';

export default function Task({ task, index, deleteTask }) {
  return (
    <>
      <li className='list-group-item d-flex-row justify-content-between'>
        <div className='progress'>
          {task.serverAlloted === -1 ? (
            <>
              <div
                className='progress-bar progress-bar-striped bg-success'
                role='progressbar'
                style={{ width: task.progress + '%' }}
                aria-valuenow='Waiting...'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
              <div>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => deleteTask(index)}
                >
                  Remove Server
                </button>
              </div>
            </>
          ) : (
            <div
              className='progress-bar progress-bar-striped bg-success'
              role='progressbar'
              style={{ width: task.progress + '%' }}
              aria-valuenow={task.progress}
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          )}
        </div>
      </li>
    </>
  );
}

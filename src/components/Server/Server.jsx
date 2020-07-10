import React from 'react';

export default function Server({ server, deleteServer, index }) {
  return (
    <li className='list-group-item'>
      <i className='fa fa-laptop' aria-hidden='true'></i>

      {server.available ? (
        <>
          <span>Available</span>
          <button
            className='btn btn-sm btn-danger'
            onClick={() => deleteServer(index)}
          >
            Remove Server
          </button>
        </>
      ) : (
        <span>Not available</span>
      )}
    </li>
  );
}

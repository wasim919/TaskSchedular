import React from 'react';
import { useDispatch } from 'react-redux';

export default function Server({ server }) {
  const dispatch = useDispatch();
  const removeServer = (e) => {
    dispatch({
      type: 'REMOVE_SERVER',
      payload: {
        index: server.index,
      },
    });
  };
  return (
    <li className='list-group-item'>
      <i className='fa fa-laptop' aria-hidden='true'></i>

      {server.serverAvailable ? (
        <>
          <span>Available</span>
          <button
            className='btn btn-sm btn-danger'
            onClick={(e) => removeServer(e)}
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

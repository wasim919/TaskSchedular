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
    <>
      <li key={server.index}></li>
      <i class='fa fa-laptop' aria-hidden='true'></i>
      {server.serverAvailable ? (
        <>
          Available
          <button
            className='btn btn-sm btn-danger'
            onClick={(e) => removeServer(e)}
          >
            Remove Server
          </button>
        </>
      ) : (
        <li>Not available</li>
      )}
    </>
  );
}

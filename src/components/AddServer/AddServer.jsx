import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddServer() {
  const dispatch = useDispatch();
  const servers = useSelector((state) => state.taskManager.servers);

  const addServer = (e) => {
    if (servers.length >= 10) {
      return (
        <div className='alert alert-warning'>
          You can't have more than 10 servers
        </div>
      );
    }
    dispatch({
      type: 'ADD_SERVER',
    });
  };

  return (
    <div>
      {servers.length <= 9 ? (
        <button className='btn btn-primary' onClick={(e) => addServer(e)}>
          Add Server
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

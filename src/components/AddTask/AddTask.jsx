import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddTask() {
  const dispatch = useDispatch();
  const servers = useSelector((state) => state.taskManager.servers);

  const addTask = (e) => {
    let allocatedServerIndex = -1;
    const availableServers = servers.filter(
      (server, index) => server.serverAvailable === true
    );
    if (availableServers.length !== 0) {
      allocatedServerIndex = availableServers[0];
      dispatch({
        actions: 'ALLOCATE_SERVER',
        payload: {
          index: allocatedServerIndex,
        },
      });
    }
    dispatch({
      type: 'ADD_TASK',
      payload: {
        serverAllocated: allocatedServerIndex,
      },
    });
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={(e) => addTask(e)}>
        Add Task
      </button>
    </div>
  );
}

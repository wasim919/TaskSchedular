import React, { useEffect } from 'react';
import { Server, AddServer, Servers, Tasks, Task } from './components';
import { useSelector } from 'react-redux';
import styles from './App.css';
import AddTask from './components/AddTask/AddTask';

function App() {
  const servers = useSelector((state) => state.taskManager.servers);
  return (
    <div className='container'>
      <AddServer />
      <Servers />
      {servers.length !== 0 ? (
        <>
          <AddTask />
          <Tasks />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

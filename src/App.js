import React, { useState } from 'react';
import { AddServer, Servers, Tasks, AddTask } from './components';
import styles from './App.css';

function App() {
  const [servers, setServers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [serverCount, setServerCount] = useState(0);
  const [nTasks, setNTasks] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  const addServer = (e) => {
    if (servers.length >= 10) {
      return (
        <div className='alert alert-warning'>
          You can't have more than 10 servers
        </div>
      );
    }
    setServers([...servers, { id: serverCount, available: true }]);
    setServerCount(serverCount + 1);
  };

  const deleteServer = (id) => {
    let newServers = servers.filter((_, index) => index !== id);
    setServers(newServers);
  };

  const deleteTask = (id) => {
    let newTasks = tasks.filter((_, index) => index !== id);
    setTasks(newTasks);
  };

  // const addTask = (e) => {
  //   if (nTasks === 0) {
  //     return;
  //   }
  // const availableServers = servers.filter(
  //   (server, index) => server.available === true
  // );
  // if (availableServers.length >= tasks) {
  //   console.log('hello');
  //   for (let i = 1; i <= tasks; ++i) {
  //     // dispatchToStore(i);
  //     console.log('hello');
  //   }
  //   runTheTasks();
  // } else {
  //   let taskQueue = [];
  //   let i;
  //   for (i = 1; i <= availableServers.length; ++i) {
  //     // dispatchToStore(i);
  //   }
  //   for (let j = i; j <= tasks; ++j) {
  //     let taskItr = {
  //       index: j,
  //       taskCompleted: false,
  //       progress: 0,
  //       serverAllocated: -1,
  //     };
  //     taskQueue.push({
  //       taskItr,
  //     });
  // dispatch({
  //   type: 'ADD_TASK',
  //   payload: {
  //     serverAllocated: -1,
  //   },
  // });
  // }
  //   }
  // };

  const addTask = () => {
    let tempTasks = [];
    let i;
    for (i = taskCount; i < taskCount + nTasks; ++i) {
      tempTasks.push({ id: i, progress: 0, serverAlloted: -1 });
    }
    setTaskCount(i);
    setTasks([...tasks, ...tempTasks]);

    runTasks();
  };

  const onAddTaskChange = (e) => {
    if (parseInt(e.target.value) <= 0) {
      return alert("Number of tasks can't be negative");
    }
    setNTasks(parseInt(e.target.value));
  };

  const runTasks = () => {
    for (let i = 1; i <= 20; ++i) {
      setTimeout(() => {
        for (let j = 0; j < tasks.length; ++j) {
          tasks[j].progress += j * 5;
        }
      }, 1000);
    }
  };

  return (
    <div className='container'>
      <AddServer servers={servers} addServer={addServer} />
      <Servers servers={servers} deleteServer={deleteServer} />
      {servers.length !== 0 ? (
        <>
          <AddTask
            addTask={addTask}
            tasks={tasks}
            servers={servers}
            onAddTaskChange={onAddTaskChange}
          />
          <Tasks tasks={tasks} deleteTask={deleteTask} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

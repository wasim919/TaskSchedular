import React, { useState, useEffect } from 'react';
import { AddServer, Servers, Tasks, AddTask } from './components';
import styles from './App.css';

function App() {
  const [servers, setServers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [serverCount, setServerCount] = useState(0);
  const [nTasks, setNTasks] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  const runTasks = (taskQueue) => {
    for (let i = 1; i <= 20; ++i) {
      setTimeout(() => {
        for (let j = 0; j < taskQueue.length; ++j) {
          taskQueue[j].progress += 5;
        }
      }, 1000);
    }
  };

  const runTasksFCFS = (availableServers) => {
    let taskQueue = [];
    let j = 0;
    let flag = 0;
    while (true) {
      for (let i = 0; i < tasks.length; ) {
        while (j < availableServers.length) {
          taskQueue.push(tasks[i]);
          ++i;
          ++j;
          if (i === tasks.length) {
            flag = 1;
            break;
          }
        }
        runTasks(taskQueue);
        taskQueue = [];
        j = 0;
        if (flag) {
          break;
        }
      }
      if (flag) {
        break;
      }
    }
  };

  useEffect(() => {
    if (tasks.length > 0) {
      let availableServers = servers.filter(
        (server) => server.available === true
      );
      if (tasks.length <= availableServers.length) {
        runTasks(tasks);
      } else {
        console.log('hello');
        runTasksFCFS(availableServers);
      }
    }
  }, [tasks]);

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

  const modifyTasks = (newTasks) => {
    setTasks([...newTasks]);
  };

  const addTask = () => {
    let tempTasks = [];
    let i;
    for (i = taskCount; i < taskCount + nTasks; ++i) {
      tempTasks.push({
        id: i,
        progress: 0,
        taskCompleted: false,
        serverAlloted: -1,
      });
    }
    setTaskCount(i);
    setTasks([...tasks, ...tempTasks]);
  };

  const onAddTaskChange = (e) => {
    if (parseInt(e.target.value) <= 0) {
      return alert("Number of tasks can't be negative");
    }
    setNTasks(parseInt(e.target.value));
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
            modifyTasks={modifyTasks}
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

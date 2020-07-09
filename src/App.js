import React, { useEffect } from 'react';
import { Server, AddServer, Servers, Tasks, Task } from './components';
import styles from './App.css';

function App() {
  return (
    <div className='container'>
      <AddServer />
      <Servers />
    </div>
  );
}

export default App;

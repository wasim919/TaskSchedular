import React from 'react';
import { Server } from '../';
import { useSelector } from 'react-redux';
import styles from './Servers.module.css';

export default function Servers() {
  const servers = useSelector((state) => state.taskManager.servers);
  return servers.length === 0 ? (
    <div className='container'>Please add atleast one server</div>
  ) : (
    <div className='row'>
      <ul styles={{ display: 'flex' }}>
        {servers.map((server, index) => (
          <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2'>
            <Server server={server} key={index} />
          </div>
        ))}
      </ul>
    </div>
  );
}

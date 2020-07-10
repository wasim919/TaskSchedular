import React from 'react';
import { Server } from '../';
import styles from './Servers.module.css';

export default function Servers({ servers, deleteServer }) {
  return servers.length === 0 ? (
    <div className='container'>Please add atleast one server</div>
  ) : (
    <div className='row'>
      <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-2'>
        <ul className='list-group d-flex justify-content-between'>
          {servers.map((server, index) => (
            <Server
              server={server}
              key={index}
              index={index}
              deleteServer={deleteServer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

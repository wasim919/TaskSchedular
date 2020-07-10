import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddServer({ servers, addServer }) {
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

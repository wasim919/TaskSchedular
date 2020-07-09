import React from 'react';
import styles from './SearchBar.module.css';
export default function SearchBar() {
  return (
    <>
      <div className={styles.buscarCaja}>
        <input
          type='text'
          name=''
          className={styles.buscarTxt}
          placeholder='Buscar...'
        />
        <a className={styles.buscarBtn}>
          <i className='far fa-search'></i>
        </a>
      </div>
    </>
  );
}

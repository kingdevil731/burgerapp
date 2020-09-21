/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './BuildControl.module.css';

const Buildcontrol = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button type="button" className={styles.Less}>
      Less
    </button>
    <button type="button" className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default Buildcontrol;

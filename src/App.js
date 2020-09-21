/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styles from './App.module.css';
import BurgerBuilder from './components/BurgerBuilder';

function App() {
  return (
    <div className={styles.App}>
      <p>
        Hello here is the class name :
        {' '}
        {styles.App}
      </p>
      <BurgerBuilder />
    </div>
  );
}

export default App;

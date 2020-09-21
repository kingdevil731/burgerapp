/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styles from './App.module.css';
import BurgerBuilder from './components/BurgerBuilder';

function App() {
  return (
    <div className={styles.App}>
      <p>
        Welcome to this Wonderful App
      </p>
      <BurgerBuilder />
    </div>
  );
}

export default App;

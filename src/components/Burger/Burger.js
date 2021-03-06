/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map((igKey) => [...Array(ingredients[igKey])].map(() => <BurgerIngredient key={igKey + Math.round(Math.random() * 2)} type={igKey} />)).reduce((arr, el) => arr.concat(el));

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

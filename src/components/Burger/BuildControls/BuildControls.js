/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Buildcontrol from './BuildControl/BuildControl';
import styles from './controls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map((item) => (
      <Buildcontrol
        key={item.label}
        label={item.label}
        added={() => props.ingredientAdded(item.type)}
      />
    ))}
  </div>
);

export default BuildControls;

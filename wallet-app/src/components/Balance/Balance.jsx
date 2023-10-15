import styles from './Balance.module.css';

import React, { useState, useEffect } from 'react';

const Balance = (props) => {
  const transactions = props.balance;

  const [totalSum, setTotalSum] = useState(0);

  const calculateTotalSum = (transactions) => {
    let sum = 0;
    transactions.forEach((transaction) => {
      const sumValue = parseFloat(transaction.Sum);
      sum += transaction.Type === '-' ? -sumValue : sumValue;
    });

    return sum.toFixed(2);
  };

  useEffect(() => {
    setTotalSum(calculateTotalSum(transactions));
  }, [transactions]);

  return (
    <div className={styles.balanceField}>
      <span className={styles.title}>YOUR BALANCE</span>
      <span className={styles.amount}>zł {totalSum}</span>
    </div>
  );
};

export default Balance;

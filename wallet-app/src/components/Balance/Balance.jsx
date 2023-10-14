import styles from './Balance.module.css';

import React, { useState, useEffect } from 'react';

const Balance = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || [],
  );
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
    // Funkcja do obsługi zmiany w localStorage
    const handleStorageChange = (event) => {
      console.log(event);
      if (event.key === 'transactions') {
        const updatedTransactions = JSON.parse(event.newValue) || [];
        setTransactions(updatedTransactions);
      }
    };

    // Rejestracja nasłuchiwania na zdarzenie zmiany w localStorage
    window.addEventListener('storage', handleStorageChange);

    // Aktualizacja totalSum po zmianie danych w transactions
    setTotalSum(calculateTotalSum(transactions));

    // Pamiętaj o usunięciu nasłuchiwania, gdy komponent zostanie odmontowany
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [transactions]); // Dodanie transactions do zależności useEffect

  return (
    <div className={styles.balanceField}>
      <span className={styles.title}>YOUR BALANCE</span>
      <span className={styles.amount}>zł {totalSum}</span>
    </div>
  );
};

export default Balance;

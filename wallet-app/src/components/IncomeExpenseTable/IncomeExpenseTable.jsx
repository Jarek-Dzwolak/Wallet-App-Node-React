import React, { useState, useEffect } from 'react';
import { fields } from '../IncomeExpenseField/IncomeExpenseField';
import styles from './IncomeExpense.module.css';
import editBtn from '../../icons/editBtn.svg';

const IncomeExpenseTable = () => {
  const isWideScreen = window.innerWidth > 768;
  const isDesktopScreen = window.innerWidth > 1279;
  // const transactions = JSON.parse(localStorage.getItem('transactions'));

  const [transactions, setTransactionList] = useState(
    JSON.parse(localStorage.getItem('transactions')),
  );

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (index) => {
    const updatedTransactionList = transactions.filter(
      (el) => el !== transactions[index],
    );
    console.log(updatedTransactionList);
    setTransactionList(updatedTransactionList);
  };

  return isWideScreen ? (
    <div className={isDesktopScreen && styles.desktopScreen}>
      {isWideScreen && (
        <ul className={styles.listKeys}>
          <li className={styles.desktopItem}>
            <strong>Date</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Type</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Category</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Comment</strong>
          </li>
          <li className={styles.desktopItem}>
            <strong>Sum</strong>
          </li>
          <li className={styles.desktopItem}></li>
        </ul>
      )}
      {transactions.map((item, index) => (
        <ul key={index} className={styles.listValues}>
          <li style={{ minWidth: '30px' }}>
            <span>{item.Date}</span>
          </li>
          <li>
            <span>{item.Type}</span>
          </li>
          <li>
            <span>{item.Category}</span>
          </li>
          <li>
            <span>{item.Comment}</span>
          </li>
          <li>
            <span style={{ color: item.Type === '-' ? 'red' : 'green' }}>
              {item.Sum}
            </span>
          </li>
          <li className={styles.buttonBox}>
            <button className={styles.editBtn}>
              <img src={editBtn} alt="edit button" />
            </button>
            <button
              onClick={() => {
                deleteTransaction(index);
              }}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  ) : (
    <div className={styles.table}>
      {transactions.map((item, index) => (
        <ul key={index} className={styles.list}>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Date:</strong> <span>{item.Date}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Type:</strong> <span>{item.Type}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Category:</strong> <span>{item.Category}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Comment:</strong> <span>{item.Comment}</span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <strong>Sum:</strong>{' '}
            <span style={{ color: item.Type === '-' ? 'red' : 'green' }}>
              {item.Sum}
            </span>
          </li>
          <li className={styles.item}>
            <div
              style={{
                backgroundColor: item.Type === '-' ? '#ff6596' : '#24CCA7',
              }}
              className={styles.colorBox}
            ></div>
            <button
              className={styles.deleteBtn}
              onClick={() => {
                deleteTransaction(index);
              }}
            >
              Delete
            </button>
            <button className={styles.editBtn}>
              <img src={editBtn} alt="edit button" />
              <span>Edit</span>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default IncomeExpenseTable;

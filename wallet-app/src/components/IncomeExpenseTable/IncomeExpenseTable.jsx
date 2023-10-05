import React from 'react';
import { fields } from '../IncomeExpenseField/IncomeExpenseField';
import styles from './IncomeExpense.module.css';
import editBtn from '../../icons/editBtn.svg';

const IncomeExpenseTable = () => {
  return (
    <div className={styles.table}>
      {fields.map((item) => (
        <ul className={styles.list}>
          <li className={styles.item}>
            <strong>Date:</strong> <span>{item.Date}</span>
          </li>
          <li className={styles.item}>
            <strong>Type:</strong> <span>{item.Type}</span>
          </li>
          <li className={styles.item}>
            <strong>Category:</strong> <span>{item.Category}</span>
          </li>
          <li className={styles.item}>
            <strong>Comment:</strong> <span>{item.Comment}</span>
          </li>
          <li className={styles.item}>
            <strong>Sum:</strong> <span>{item.Sum}</span>
          </li>
          <li className={styles.item}>
            <button className={styles.deleteBtn}>Delete</button>
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

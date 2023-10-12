import React, { useState } from 'react';
import css from './TransactionModal.module.css';
import close from '../../icons/close.svg';

const TransactionModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modalContainer}>
        <h2 className={css.tittle}>Add transaction</h2>
        <img
          className={css.closeBtn}
          onClick={onClose}
          style={{ cursor: 'pointer' }}
          src={close}
          alt="wallet icon"
        />
        <label className={css.switch}>
          <input className={css.switch_input} type="checkbox" />
          <span className={css.slider}></span>
        </label>

        <select className={css.selectStyle}>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <div className={css.modalContainer2}>
          <input className={css.valueInput} type="number" placeholder="0.00" />
          <input
            className={css.dateInput}
            type="date"
            min="2023-01-01"
            max="2025-04-20"
          />
        </div>
        <input className={css.commentInput} type="text" placeholder="Comment" />
        <button className={css.btn}>ADD</button>
        <button className={css.btn2}>CANCEL</button>
      </div>
    </div>
  );
};

export default TransactionModal;

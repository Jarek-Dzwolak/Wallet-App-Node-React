import React, { useState } from 'react';
import css from './TransactionModal.module.css';
import DatePicker from 'react-datepicker';

const TransactionModal = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!open) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modalContainer}>
        <h2>Add transaction</h2>
        <input type="checkbox" />
        <select>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <div className={css.modalContainer2}>
          <input type="text" placeholder="Wpisz coś" />
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Wybierz datę"
          />
          {selectedDate && (
            <p>Wybrana data: {selectedDate.toLocaleDateString()}</p>
          )}
        </div>
        <input type="text" placeholder="Wpisz coś" />
        <p onClick={onClose} className={css.closeBtn}>
          X
        </p>
      </div>
    </div>
  );
};

export default TransactionModal;

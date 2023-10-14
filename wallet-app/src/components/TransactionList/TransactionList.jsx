import React, { useEffect, useState } from 'react';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <div key={index}>
            <p>Type: {transaction.type}</p>
            <p>Category: {transaction.category}</p>
            <p>Value: {transaction.value}</p>
            <p>Date: {transaction.date}</p>
            <p>Comment: {transaction.comment}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;

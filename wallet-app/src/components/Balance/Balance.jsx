import styles from './Balance.module.css';

const Balance = () => {
  const transactions = JSON.parse(localStorage.getItem('transactions'));
  const calculateTotalSum = (transactions) => {
    let totalSum = 0;

    transactions.forEach((transaction) => {
      const sumValue = parseFloat(transaction.Sum);

      if (transaction.Type === '-') {
        totalSum -= sumValue;
      } else {
        totalSum += sumValue;
      }
    });

    return totalSum.toFixed(2);
  };

  const totalSum = calculateTotalSum(transactions);

  return (
    <div className={styles.balanceField}>
      <span className={styles.title}>YOUR BALANCE</span>
      <span className={styles.amount}>₴ {totalSum}</span>
    </div>
  );
};

export default Balance;

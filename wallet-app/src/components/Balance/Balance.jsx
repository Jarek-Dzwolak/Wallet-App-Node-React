import styles from './Balance.module.css';

const Balance = () => {
  return (
    <div className={styles.balanceField}>
      <span className={styles.title}>YOUR BALANCE</span>
      <span className={styles.amount}>₴ 24 000.00</span>
    </div>
  );
};

export default Balance;

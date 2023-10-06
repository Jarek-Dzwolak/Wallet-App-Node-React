import styles from './Curriences.module.css';
import bg from '../../icons/curriencesBg.svg';

const Curriences = () => {
  return (
    <ul className={styles.walletBox}>
      <li className={styles.walletKeys}>
        <span className={styles.item}>Currency</span>
        <span className={styles.item}>Purchase</span>
        <span className={styles.item}>Sale</span>
      </li>
      <ul className={styles.walletValuesBox}>
        <img className={styles.walletBg} src={bg} alt="bg"></img>
        <li className={styles.walletValues}>
          <span className={styles.item}>USD</span>
          <span className={styles.item}>27.55</span>
          <span className={styles.item}>27.65</span>
        </li>
        <li className={styles.walletValues}>
          <span className={styles.item}>EUR</span>
          <span className={styles.item}>30.00</span>
          <span className={styles.item}>30.10</span>
        </li>
      </ul>
    </ul>
  );
};

export default Curriences;

import styles from './PopUpBtn.module.css';
import plus from '../../icons/plus.svg';

const PopUpBtn = () => {
  return (
    <div className={styles.btn}>
      <img src={plus} className={styles.icon} alt="plus icon"></img>
    </div>
  );
};

export default PopUpBtn;

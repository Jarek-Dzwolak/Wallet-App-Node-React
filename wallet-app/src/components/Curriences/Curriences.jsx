import styles from "./Curriences.module.css";

const Curriences = () => {
	return (
		<ul className={styles.walletBox}>
			<li className={styles.walletKeys}>
				<span className={styles.item}>Currency</span>
				<span className={styles.item}>Purchase</span>
				<span className={styles.item}>Sale</span>
			</li>
			<li className={styles.walletKeys}>
				<span className={styles.item}></span>
				<span className={styles.item}></span>
				<span className={styles.item}></span>
			</li>
			<li className={styles.walletKeys}>
				<span className={styles.item}></span>
				<span className={styles.item}></span>
				<span className={styles.item}></span>
			</li>
		</ul>
	);
};

export default Curriences;

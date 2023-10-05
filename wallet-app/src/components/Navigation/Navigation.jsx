import styles from "./Navigation.module.css";
import email from "../../icons/email.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<ul className={styles.navigation}>
			<li>
				<NavLink to="/home">
					<img
						className={styles.navigationIcon}
						src={email}
						alt="nav icon"></img>
				</NavLink>
			</li>
			<li>
				<NavLink to="/statistic">
					<img
						className={styles.navigationIcon}
						src={email}
						alt="nav icon"></img>
				</NavLink>
			</li>
			<li>
				<NavLink to="/currencies">
					<img
						className={styles.navigationIcon}
						src={email}
						alt="nav icon"></img>
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;

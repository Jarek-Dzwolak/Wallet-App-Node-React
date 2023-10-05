import React from "react";
import Balance from "../../components/Balance/Balance";
import Navigation from "../../components/Navigation/Navigation";
import IncomeExpenseTable from "../../components/IncomeExpenseTable/IncomeExpenseTable";
import Styles from "./Home.module.css";

function Home() {
	return (
		<div className={Styles.balance}>
			<Navigation />
			<Balance />
			<IncomeExpenseTable />
		</div>
	);
}

export default Home;

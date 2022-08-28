import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	//const [items, setItems] = useState(props.items);

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);

		//setItems(
		//	props.items.filter((item) => {
		//		return item.date.getFullYear() === new Date(selectedYear).getFullYear();
		//	})
		//);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

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

	let expensesContent = <p>No expenses found</p>;
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((item) => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;

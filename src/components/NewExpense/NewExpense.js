import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const onSaveExpenseDataHandler = (expenseData) => {
		const expense = {
			...expenseData,
			id: Math.floor(Math.random() * 1000000),
		};

		props.onAddExpense(expense);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;

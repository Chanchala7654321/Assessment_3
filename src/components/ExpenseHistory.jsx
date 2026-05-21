import React from "react";

import { useExpenseState } from "../context/ExpenseContext";

import ExpenseCard from "./ExpenseCard";

function ExpenseHistory() {
  const { expenses } = useExpenseState();

  return (
    <div className="history-container">
      <h3>Expense History</h3>

      {expenses.length === 0 ? (
        <p>No expenses added</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
}

export default ExpenseHistory;

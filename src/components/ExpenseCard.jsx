import React from "react";

import { useExpenseDispatch } from "../context/ExpenseContext";

function ExpenseCard({ expense }) {
  const dispatch = useExpenseDispatch();

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: expense.id,
    });
  };

  return (
    <div className="expense-card">
      <div>
        <h4>{expense.title}</h4>
        <p>{expense.category}</p>
      </div>

      <div className="expense-right">
        <span>₹ {expense.amount}</span>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ExpenseCard;


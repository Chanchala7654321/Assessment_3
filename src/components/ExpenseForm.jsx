import React, { useState } from "react";

import { useExpenseDispatch } from "../context/ExpenseContext";

function ExpenseForm() {
  const dispatch = useExpenseDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("Please fill all fields");
      return;
    }

    const expenseData = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    dispatch({
      type: "ADD_NEW_EXPENSE",
      payload: expenseData,
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

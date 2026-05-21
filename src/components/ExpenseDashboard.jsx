import React from "react";

import { useAuthState, useAuthDispatch } from "../context/AuthContext";

import { useExpenseState } from "../context/ExpenseContext";

import ExpenseForm from "./ExpenseForm";
import ExpenseHistory from "./ExpenseHistory";

function ExpenseDashboard() {
  const { currentUser } = useAuthState();

  const authDispatch = useAuthDispatch();

  const { expenses } = useExpenseState();

  const totalBalance = expenses.reduce((total, item) => total + item.amount, 0);

  const handleLogout = () => {
    authDispatch({
      type: "LOGOUT_USER",
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <h2>Expense Dashboard</h2>

        <button onClick={handleLogout}>Logout</button>
      </div>

      <h3>Welcome, {currentUser} </h3>

      <div className="balance-box">
        <h2>Total Balance: ₹ {totalBalance}</h2>
      </div>

      <ExpenseForm />

      <ExpenseHistory />
    </div>
  );
}

export default ExpenseDashboard;

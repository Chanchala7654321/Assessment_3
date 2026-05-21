import React from "react";

import LoginPage from "./components/LoginPage";
import ExpenseDashboard from "./components/ExpenseDashboard";

import { useAuthState } from "./context/AuthContext";

function App() {
  const auth = useAuthState();

  if (!auth) {
    return <h2>Loading...</h2>;
  }

  const { isAuthenticated } = auth;

  return (
    <div className="app-container">
      {!isAuthenticated ? <LoginPage /> : <ExpenseDashboard />}
    </div>
  );
}

export default App;


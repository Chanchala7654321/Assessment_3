import React, { useState } from "react";

import { useAuthDispatch } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");

  const dispatch = useAuthDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter username");
      return;
    }

    dispatch({
      type: "LOGIN_USER",
      payload: username,
    });

    setUsername("");
  };

  return (
    <div className="login-box">
      <h2>Secure Expense Tracker</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;


import React, { createContext, useContext, useReducer } from "react";

import { expenseReducer, expenseInitialState } from "./reducers/expenseReducer";

const ExpenseStateContext = createContext();
const ExpenseDispatchContext = createContext();

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, expenseInitialState);

  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
}

export const useExpenseState = () => useContext(ExpenseStateContext);

export const useExpenseDispatch = () => useContext(ExpenseDispatchContext);



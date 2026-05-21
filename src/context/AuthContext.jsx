import React, {
    createContext,
    useContext,
    useReducer
  } from 'react';
  
  import {
    authReducer,
    authInitialState
  } from './reducers/authReducer';
  
  const AuthStateContext = createContext(null);
  const AuthDispatchContext = createContext(null);
  
  export function AuthProvider({ children }) {
  
    const [state, dispatch] = useReducer(
      authReducer,
      authInitialState
    );
  
    return (
      <AuthStateContext.Provider value={state}>
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    );
  }
  
  export function useAuthState() {
    return useContext(AuthStateContext);
  }
  
  export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
  }
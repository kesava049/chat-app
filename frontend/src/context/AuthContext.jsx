import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
export const AuthContext = createContext();

// Provide a hook to access the auth context
export const useAuthContext = () => {
  return useContext(AuthContext);
};


export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}

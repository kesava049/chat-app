import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Provide a hook to access the auth context
export const useAuthContext = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  
  useEffect(() => {
    const user = localStorage.getItem('authUser');
    setAuthUser(user);
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
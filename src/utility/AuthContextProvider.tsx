// Context for authentification

import React from "react";
import { useState, useContext } from "react";

// Creates Context

const AuthContext = React.createContext<React.ReactNode | null>(null);

// Context Provider

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming Context

const useAuthContext: any = () => {
  return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuthContext };

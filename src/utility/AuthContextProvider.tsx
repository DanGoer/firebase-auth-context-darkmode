import React from "react"
import { useState, useContext } from "react"

const AuthContext = React.createContext<React.ReactNode | null>(null)

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<any>(null)

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext: any = () => {
  return useContext(AuthContext)
}

export { AuthProvider, AuthContext, useAuthContext }

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setLoggedIn(true)
    }
  }, [])

  const login = () => {
    setLoggedIn(true)
    setLoginError('')
  }

  const logout = () => {
    window.localStorage.clear()
    window.location.href = "/"
    setLoggedIn(false)
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, loginError, setLoginError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === 'Satya@gmail.com' && password === 'test') {
      setUser({ email, role: 'consumer' });
      return 'consumer';
    } else if (email === 'karthikeya@gmail.com' && password === 'test') {
      setUser({ email, role: 'vendor' });
      return 'vendor';
    }
    return null;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
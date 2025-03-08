// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Predefined users for login
  const predefinedUsers = [
    { email: 'Satya@gmail.com', password: 'test', role: 'consumer' },
    { email: 'karthikeya@gmail.com', password: 'test', role: 'vendor' },
  ];

  // Load registered users from local storage (if any)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const storedUsers = localStorage.getItem('registeredUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const login = (email, password) => {
    // Check predefined users
    const predefinedUser = predefinedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (predefinedUser) {
      setUser({ email, role: predefinedUser.role });
      return predefinedUser.role;
    }

    // Check registered users
    const registeredUser = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (registeredUser) {
      setUser({ email, role: registeredUser.role });
      return registeredUser.role;
    }

    return null;
  };

  const signup = (name, email, password, role) => {
    // Check if email already exists
    if (
      predefinedUsers.some((u) => u.email === email) ||
      registeredUsers.some((u) => u.email === email)
    ) {
      return false; // Email already exists
    }

    const newUser = { name, email, password, role };
    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    return true; // Signup successful
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
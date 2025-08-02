import React, { createContext, useContext, useState, useEffect } from 'react';
import { authenticateUser } from '../data/authData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const authenticatedUser = authenticateUser(email, password);
    if (authenticatedUser) {
      // Remove password from user object before storing
      const { password: _, ...userWithoutPassword } = authenticatedUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: 'Email atau password salah' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const hasRole = (role) => {
    return user && user.role === role;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    hasRole,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 
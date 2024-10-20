import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'farmer' | 'consumer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: 'farmer' | 'consumer') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // TODO: Implement actual API call for login
    // For now, we'll use a mock user
    setUser({
      id: 1,
      name: 'John Doe',
      email: email,
      role: 'consumer',
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string, role: 'farmer' | 'consumer') => {
    // TODO: Implement actual API call for registration
    // For now, we'll use a mock user
    setUser({
      id: 1,
      name: name,
      email: email,
      role: role,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
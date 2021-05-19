import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import Cookies from 'universal-cookie';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@controllertokenacessauth');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });
  
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/api/auth/login', {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem('@controllertokenacessauth', token);

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@controllertokenacessauth');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};



const removeToken = () => {
  localStorage.removeItem('@controllertokenacessauth');
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth,
  removeToken,
};
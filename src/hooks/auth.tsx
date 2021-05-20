import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import Cookies from 'universal-cookie';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
  refresh?: string;

}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@controllertokenacessauth');
    const user = localStorage.getItem('@controller:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const cookies = new Cookies();

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/api/auth/login', {
      email,
      password,
    });

    const { token, user, refresh } = response.data;
    const { permission } = user;

    localStorage.setItem('@controllertokenacessauth', token);
    localStorage.setItem('@controller:user', JSON.stringify(user));
    cookies.set('refresh', refresh, { path: '/' });
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@controllertokenacessauth');
    localStorage.removeItem('@controller:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const headersToken = () => {
  const cookies = new Cookies();

  const AuthStr = `Bearer ${localStorage.getItem('@controllertokenacessauth')}`;
  const User = `${localStorage.getItem('@controller:user')}`;

  return {
    headers: {
      Authorization: AuthStr,
      datauser: User,
    },
  };
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
  headersToken,
  removeToken,
};
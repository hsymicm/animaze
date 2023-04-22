import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, useContext, createContext, useMemo } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);

  const value = useMemo(() => ({
    user,
    error,
  }));
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};

import React, { createContext, useCallback, useContext, useState } from "react";

interface IAuthContextProps {
  email: string | undefined;
  accessToken: string | undefined;
  logout(): void;
  login(email: string, password: string): void;
}
const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [email, setEmail] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();

  const login = useCallback((email: string) => {
    setEmail(email);
    setAccessToken(crypto.randomUUID());
  }, []);

  const logout = useCallback(() => {
    setEmail(undefined);
    setAccessToken(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, accessToken, email }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useIsAuthenticated = () => {
  const { accessToken } = useAuthContext();
  return !!accessToken;
};

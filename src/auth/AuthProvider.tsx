import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getSession,
  login as loginUser,
  logout as logoutUser,
  signup as signupUser,
} from "./authService";

import type { AuthSession, AuthUser } from "./types";

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<void>;
  signup: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(
    null,
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedSession = getSession();

    setSession(storedSession);
    setIsLoading(false);
  }, []);

  const login = async (
    email: string,
    password: string,
  ) => {
    const newSession = await loginUser(email, password);

    setSession(newSession);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
  ) => {
    const newSession = await signupUser(
      name,
      email,
      password,
    );

    setSession(newSession);
  };

  const logout = () => {
    logoutUser();
    setSession(null);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: Boolean(session),
      isLoading,
      login,
      signup,
      logout,
    }),
    [session, isLoading],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider.",
    );
  }

  return context;
}
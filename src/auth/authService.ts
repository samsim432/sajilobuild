import type { AuthSession, AuthUser } from "./types";

const SESSION_KEY = "sajilobuild_dev_session";

const registeredEmails = new Set<string>();

function createId(): string {
  return `user_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function createToken(): string {
  return `dev_session_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2)}`;
}

function saveSession(session: AuthSession): void {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify(session),
  );
}

function getStoredSession(): AuthSession | null {
  const stored = sessionStorage.getItem(SESSION_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as AuthSession;
  } catch {
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export async function login(
  email: string,
  _password: string,
): Promise<AuthSession> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 600);
  });

  const normalizedEmail = email.trim().toLowerCase();

  const existingSession = getStoredSession();

  if (
    existingSession &&
    existingSession.user.email === normalizedEmail
  ) {
    return existingSession;
  }

  const user: AuthUser = {
    id: createId(),
    name: normalizedEmail.split("@")[0],
    email: normalizedEmail,
    createdAt: new Date().toISOString(),
  };

  const session: AuthSession = {
    user,
    token: createToken(),
  };

  registeredEmails.add(normalizedEmail);

  saveSession(session);

  return session;
}

export async function signup(
  name: string,
  email: string,
  _password: string,
): Promise<AuthSession> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 700);
  });

  const normalizedEmail = email.trim().toLowerCase();

  if (registeredEmails.has(normalizedEmail)) {
    throw new Error("An account with this email already exists.");
  }

  const user: AuthUser = {
    id: createId(),
    name: name.trim(),
    email: normalizedEmail,
    createdAt: new Date().toISOString(),
  };

  const session: AuthSession = {
    user,
    token: createToken(),
  };

  registeredEmails.add(normalizedEmail);

  saveSession(session);

  return session;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function getSession(): AuthSession | null {
  return getStoredSession();
}

export function isAuthenticated(): boolean {
  return getStoredSession() !== null;
}
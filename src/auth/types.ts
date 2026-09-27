export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
}
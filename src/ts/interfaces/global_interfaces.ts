// TS Interfaces

export interface User {
  uid: string;
  email: string | null;
}

export type AuthContextType = { auth: any };

export interface BgTheme {
  children: React.ReactNode;
}

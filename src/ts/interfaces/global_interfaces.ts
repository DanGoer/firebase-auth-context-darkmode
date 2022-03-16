export interface User {
  uid: string;
  email: string | null;
}

export type AuthContextType = { auth: any };

export interface BgTheme {
  initialTheme: any;
  children: React.ReactNode | { children: Element };
}

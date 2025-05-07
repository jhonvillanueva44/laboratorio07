export interface User {
    id: number;
    username: string;
    email: string;
    role: 'user' | 'moderator' | 'admin';
    accessToken: string;
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (data: LoginData) => Promise<void>;
    logout: () => void;
  }
  
  export interface LoginData {
    username: string;
    password: string;
  }
  
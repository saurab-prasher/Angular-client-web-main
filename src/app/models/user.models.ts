export interface User {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string; // Consider security implications
  preferences: string[];
  createdAt?: string;
  updatedAt?: string;
}

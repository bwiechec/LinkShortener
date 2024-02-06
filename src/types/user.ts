export interface User {
  id: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserRegister {
  email: string;
  password: string;
}
export interface UserResponse {
  user: User;
  token: string;
}

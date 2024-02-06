import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";

interface IUserContext {
  user: User | undefined;
  setUser: (newUser: User) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Use context inside provider!");
  }
  return context;
};

export function UserContextProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(undefined);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

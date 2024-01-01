import React, { createContext, useContext, useEffect } from "react";
import { useSecureStorage } from "Hooks/useSecureStorage";

const AuthContext = createContext();

export default function Authorize({ children }) {
  const [user, setUser] = useSecureStorage("auth", {
    isAuth: false,
    token: "",
    refreshToken: "",
    data: {},
    forgotEmail: "",
    validationCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

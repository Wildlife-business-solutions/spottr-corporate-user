import React, { createContext, useContext, useEffect } from "react";
import { useSecureStorage } from "Hooks/useSecureStorage";

const RegContext = createContext();

export default function Registration({ children }) {
  const [regData, setRegData] = useSecureStorage("registration", {
    pageCount: 0,
    welcomePage: 0,
    form: {
      firstName: "",
      lastName: "",
      username: "",
      avatar: "",
      email: "",
      country: "",
      password: "",
      phoneNumber_withoutCountryCode: "",
      phoneNumber: "",
      otp: "",
      accountType: "corporate",
    },
  });

  return (
    <RegContext.Provider value={{ regData, setRegData }}>
      {children}
    </RegContext.Provider>
  );
}

export const useRegContext = () => useContext(RegContext);

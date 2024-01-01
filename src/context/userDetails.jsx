import React, { createContext, useContext } from "react";
import { useSecureStorage } from "Hooks/useSecureStorage";

const CorporateUserContext = createContext();

export default function CorporateUser({ children }) {
  const [corporateUser, setCorporateUser] = useSecureStorage("corporateUser", {
    token: "",
    welcomePage: 0,
    address: "",
    data: {
      welcomePage: 0,
      brandName: "",
      contactEmail: "",
      contactPhoneNumber: "",
      username: "",
      lng: "",
      lat: "",
      description: "",
      businessTags: [],
      businessCategories: [],
      productImages: {},
      categoryId: "",
      profileUrl: "",
    },
  });

  return (
    <CorporateUserContext.Provider value={{ corporateUser, setCorporateUser }}>
      {children}
    </CorporateUserContext.Provider>
  );
}

export const useCorporateUser = () => useContext(CorporateUserContext);

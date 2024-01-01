import React, { createContext, useContext } from "react";
import { useSecureStorage } from 'Hooks/useSecureStorage'
import { menuData } from "components/dashboard/main/menu/menuData";

const CorporateMenuContext = createContext();

export default function CorporateMenu({ children }) {
  

  const [corporateMenu, setCorporateMenu] = useSecureStorage("corporateMenu",menuData);

  return (
    <CorporateMenuContext.Provider value={{corporateMenu, setCorporateMenu}}>
      {children}
    </CorporateMenuContext.Provider>
  );
}

export const useCorporateMenu = ()=> useContext(CorporateMenuContext)

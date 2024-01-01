import React, { createContext, useContext } from "react";
import { useSecureStorage } from 'Hooks/useSecureStorage'

const ModalContext = createContext();

export default function AllModals({ children }) {
  

  const [modals, setModals] = useSecureStorage("allModals",{
    requestModal : false,
    selectUserModal: true
  });

  return (
    <ModalContext.Provider value={{modals, setModals}}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = ()=> useContext(ModalContext)

import React, { useState, createContext, useContext } from "react";

export const ToggleAdminModalContext = createContext();

export default function AdminModalContext({ children }) {

  const [showmodal, setShowModal] = useState(false);

  const values = {
    showmodal,
    setShowModal,
  };
  
  return (
    <ToggleAdminModalContext.Provider value={values}>
      {children}
    </ToggleAdminModalContext.Provider>
  );
}

export const useAdminModalContext = () => useContext(ToggleAdminModalContext);

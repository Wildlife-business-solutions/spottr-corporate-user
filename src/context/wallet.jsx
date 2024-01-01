import React, { createContext, useContext } from "react";
import { useSecureStorage } from 'Hooks/useSecureStorage'

const walletContext = createContext();

export default function WalletContext({ children }) {
  

  const [wallet, setWallet] = useSecureStorage("walletData",{
      total:0,
      fiat:{},
      cliq:{},
      susd:{}
  });

  return (
    <walletContext.Provider value={{wallet, setWallet}}>
      {children}
    </walletContext.Provider>
  );
}

export const useWalletContext = ()=> useContext(walletContext)

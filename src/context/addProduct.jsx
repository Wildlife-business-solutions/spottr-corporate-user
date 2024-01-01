import React, { createContext, useContext } from "react";
import { useSecureStorage } from "Hooks/useSecureStorage";

const CorporateProductContext = createContext();

export default function AddCorporateProduct({ children }) {
  const [corporateProduct, setCorporateProduct] = useSecureStorage(
    "corporateProduct",
    {
      page: 0,
      showProductModal: false,
      product: {},
    }
  );
  return (
    <CorporateProductContext.Provider
      value={{ corporateProduct, setCorporateProduct }}>
      {children}
    </CorporateProductContext.Provider>
  );
}

export const useCorporateProduct = () => useContext(CorporateProductContext);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  showProductModal: false,
  productImages: {},
  productData: {},
  userLocation: "",
  productPrice: "",
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "corporate_product",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    addCorporateProductData: (state, { payload }) => {},
    addCorporateProductPrice: (state, { payload }) => {},
    addCorporateProductImage: (state, { payload }) => {},

    addCorporateUserLocation: (state, { payload }) => {},
  },
});

// Action creators for each reducer method
export const {
  addCorporateProductData,
  addCorporateProductPrice,
  addCorporateProductImage,
  addCorporateUserLocation,
} = customerSlice.actions;

export default customerSlice.reducer;

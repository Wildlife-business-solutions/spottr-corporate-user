import { createSlice } from "@reduxjs/toolkit";
import { data } from "components/dashboard/main/graph/data";
import { ProductImage } from "assets/opImage.png";

const initialState = {
  token: "",
  welcomePage: 0,
  address: {},
  profile: [],
  data: {
    brandName: "",
    contactEmail: "",
    contactPhoneNumber: "",
    businessTags: [],
    businessCategories: [],
    username: "",
    price: "",
    description: "",
    productName: "",
    productImages: [],
    categoryId: "",
    profileUrl: "",
  },
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "corporate_user",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setCorporateDetails: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    setCorporateData: (state, { payload }) => {
      return {
        ...state,
        data: { ...state.data, ...payload },
      };
    },
    setCorporateToken: (state, { payload }) => {
      return {
        ...state,
        token: payload,
      };
    },
    setCorporateAddress: (state, { payload }) => {
      return {
        ...state,
        address: payload,
      };
    },
    setUserProfile: (state, { payload }) => {
      return {
        ...state,
        profile: payload,
      };
    },
    resetCorporateDetails: () => {
      return initialState;
    },
  },
});

// Action creators for each reducer method
export const {
  setCorporateDetails,
  setCorporateToken,
  setCorporateData,
  setCorporateAddress,
  setUserProfile,
  resetCorporateDetails,
} = customerSlice.actions;

export default customerSlice.reducer;

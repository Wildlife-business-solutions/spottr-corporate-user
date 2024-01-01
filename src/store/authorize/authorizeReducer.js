import { createSlice } from "@reduxjs/toolkit";
import { getSecureStorage, setSecureStorage } from "utilities/js/helpers";

const initialState = {
  isAuth: getSecureStorage("auth")?.isAuth || "",
  token: getSecureStorage("auth")?.token,
  refreshToken: getSecureStorage("auth")?.refreshToken || "",
  data: getSecureStorage("auth")?.data || {},
  forgotEmail: getSecureStorage("auth")?.forgotEmail || "",
  lat: getSecureStorage("auth")?.lat || "",
  lng: getSecureStorage("auth")?.lng || "",
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "authorize",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setAllData: (state, { payload }) => {
      const data = { ...state, ...payload };
      setSecureStorage("auth", data);
      return data;
    },
    setIsAuth: (state, { payload }) => {
      const data = { ...state, isAuth: payload };
      setSecureStorage("auth", data);
      return {
        ...state,
        isAuth: payload,
      };
    },
    setUserData: (state, { payload }) => {
      const data = { ...state, data: payload };
      setSecureStorage("auth", data);
      return {
        ...state,
        data: payload,
      };
    },
    setforgetEmail: (state, { payload }) => {
      const data = { ...state, forgotEmail: payload };
      setSecureStorage("auth", data);
      return {
        ...state,
        forgotEmail: payload,
      };
    },
    setLocation: (state, { payload }) => {
      const data = { ...state, ...payload };
      setSecureStorage("auth", data);
      return data;
    },
  },
});

// Action creators for each reducer method
export const {
  setUserData,
  setAllData,
  setIsAuth,
  setforgetEmail,
  setLocation,
} = customerSlice.actions;

export default customerSlice.reducer;

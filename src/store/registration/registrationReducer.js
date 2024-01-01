import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "registration",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setFormRegistrationData: (state, { payload }) => {
      return { ...state, form: payload };
    },

    setRegistrationPageCount: (state, { payload }) => {
      return { ...state, pageCount: payload };
    },
  },
});

// Action creators for each reducer method
export const { setAllRegistrationData, setRegistrationPageCount } =
  customerSlice.actions;

export default customerSlice.reducer;

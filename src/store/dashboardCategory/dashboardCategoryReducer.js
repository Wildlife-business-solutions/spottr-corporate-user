import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "dashboard_category",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setCategoryDetails: (state, { payload }) => {
      return {
        ...state,
        categories: payload,
      };
    },
  },
});

// Action creators for each reducer method
export const { setCategoryDetails } = customerSlice.actions;

export default customerSlice.reducer;

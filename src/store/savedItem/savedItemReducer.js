import { createSlice } from "@reduxjs/toolkit";
import { getSecureStorage } from "../../utilities/js/helpers";

// const initialState = getSecureStorage("saved_item") || [];
const initialState = getSecureStorage("saved_item") || [];

const customerSlice = createSlice({
  // An unique name of a slice
  name: "saved_item",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setSavedItem: (state, { payload }) => {
      const data = [...state, payload];
      console.log(data);
      // const data = { ...state, ...payload };
      // setSecureStorage("saved_item", data);
      return data;
    },
  },
});

// Action creators for each reducer method
export const { setSavedItem } = customerSlice.actions;

export default customerSlice.reducer;

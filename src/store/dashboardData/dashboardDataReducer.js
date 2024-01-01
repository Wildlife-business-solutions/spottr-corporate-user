import { createSlice, current } from "@reduxjs/toolkit";
import { draftCards, publishedCards } from "utilities/constant/dummyCards";
import { setSecureStorage } from "utilities/js/helpers";
import { getSecureStorage } from "../../utilities/js/helpers";
import { categoryData } from "../../pages/dashboard/main/discover/categories/categoryData";

const initialState = {
  publishedData:
    getSecureStorage("dashboardData")?.publishedData || publishedCards,
  draft: getSecureStorage("dashboardData")?.draft || draftCards,
  currentData: getSecureStorage("dashboardData")?.currentData || [],
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "dashboard",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    addToDraft: (state, { payload }) => {
      const data = { ...state, draft: [...state.draft, payload] };
      setSecureStorage("dashboardData", data);
      return data;
    },
    addCurrentData: (state, { payload }) => {
      const data = { ...state, currentData: payload };
      setSecureStorage("dashboardData", data);
      return data;
    },

    addToPublishedData: (state, { payload }) => {
      const data = {
        ...state,
        publishedData: [...state.publishedData, payload],
      };
      setSecureStorage("dashboardData", data);
      return data;
    },
    removeFromPublishedData: (state, { payload }) => {
      const item = current(state).publishedData.filter(
        (i) => i.categoryId !== payload.categoryId
      );
      const data = {
        ...state,
        publishedData: item,
      };
      setSecureStorage("dashboardData", data);
      return data;
    },
    removeFromDraft: (state, { payload }) => {
      const item = current(state).draft.filter(
        (i) => i.categoryId !== payload.categoryId
      );
      const data = {
        ...state,
        draft: item,
      };
      setSecureStorage("dashboardData", data);
      return data;
    },
    clearCurrentData: (state) => {
      const data = {
        ...state,
        currentData: [],
      };
      setSecureStorage("dashboardData", data);
      return data;
    },
  },
});

// Action creators for each reducer method
export const {
  addToDraft,
  addCurrentData,
  addToPublishedData,
  removeFromPublishedData,
  removeFromDraft,
  clearCurrentData,
} = customerSlice.actions;

export default customerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { messagedCards } from "utilities/constant/dummyCards";

const initialState = {
  messagedUser: messagedCards,
  sendChat: [],
  receivedChat: [],
  profile: [],
};

const customerSlice = createSlice({
  // An unique name of a slice
  name: "message",

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    setMessagedUser: (state, { payload }) => {
      return {
        ...state,
        setReceivedChat: [...state.messagedUser, payload],
      };
    },
    setSendChat: (state, { payload }) => {
      return {
        ...state,
        sendChat: [...state.sendChat, payload],
      };
    },
    setReceivedChat: (state, { payload }) => {
      return {
        ...state,
        receivedChat: [...state.receivedChat, payload],
      };
    },
    setProfile: (state, { payload }) => {
      return {
        ...state,
        profile: payload,
      };
    },
  },
});

// Action creators for each reducer method
export const { setMessagedUser, setSendChat, setReceivedChat, setProfile } =
  customerSlice.actions;

export default customerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TUserSlice = {
  trackingNumber: null | string;
};

const initialState: TUserSlice = {
  trackingNumber: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTN: (state, action) => {
      const { trackingNumber } = action.payload;
      state.trackingNumber = trackingNumber;
    },

    removeTN: (state) => {
      state.trackingNumber = null;
    },
  },
});

export const { setTN, removeTN } = userSlice.actions;

export default userSlice.reducer;

export const useCurrentTN = (state: RootState) => state.user.trackingNumber;

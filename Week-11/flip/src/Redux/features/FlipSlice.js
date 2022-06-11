import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FlipState: true,
};

const FlipSlice = createSlice({
  name: "flip",
  initialState,
  reducers: {
    setFlip: (state, action) => {
      state.FlipState = action.payload;
    },
  },
});

export const { setFlip } = FlipSlice.actions;

export const FlipStateData = (state) => state.Flip.FlipState;

export default FlipSlice.reducer;

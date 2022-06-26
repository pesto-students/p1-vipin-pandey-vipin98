import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CounterState: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter: (state, action) => {
      if (action.payload === "clear") {
        state.CounterState = 0;
      } else {
        state.CounterState = action.payload;
      }
    },
  },
});

export const { setCounter } = CounterSlice.actions;

export const CounterStateData = (state) => state.Counter.CounterState;

export default CounterSlice.reducer;

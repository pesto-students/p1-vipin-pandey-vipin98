import { configureStore } from "@reduxjs/toolkit";

import FlipSlice from "../features/FlipSlice";

export const store = configureStore({
  reducer: {
    Flip: FlipSlice,
  },
});

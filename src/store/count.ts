import { createSlice } from "@reduxjs/toolkit";

const countStore = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action) {
      state.count += action.payload;
    },
    minus(state, action) {
      state.count -= action.payload;
    },
  },
});
export const { add, minus } = countStore.actions;
export default countStore;

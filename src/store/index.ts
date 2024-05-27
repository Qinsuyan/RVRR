import { configureStore } from "@reduxjs/toolkit";
import countStore from "./count";

const defaultStore = configureStore({
  reducer: {
    count: countStore.reducer,
  },
});
export default defaultStore;
export type StoreType = ReturnType<typeof defaultStore.getState>;

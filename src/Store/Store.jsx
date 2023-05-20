import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Slice/DataSlice";

const store = configureStore({
  reducer: {
    data: DataSlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    dataLists: {
      name: undefined,
      userName: undefined,
      content: undefined,
    },
  },
  reducers: {
    addData: (state, action) => {
      console.log(action);
    },
  },
});

export const { addData } = DataSlice.actions;
export default DataSlice.reducer;

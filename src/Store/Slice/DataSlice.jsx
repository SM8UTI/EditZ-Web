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
    changeName: (state, action) => {
      state.dataLists.name = action.payload;
    },
    changeUserName: (state, action) => {
      state.dataLists.userName = action.payload;
    },
    changeContent: (state, action) => {
      state.dataLists.content = action.payload;
    },
  },
});

export const { changeName, changeUserName, changeContent } = DataSlice.actions;
export default DataSlice.reducer;

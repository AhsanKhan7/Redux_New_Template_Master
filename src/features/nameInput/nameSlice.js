import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export const selectName = (state) => state.name.name;

export default nameSlice.reducer;

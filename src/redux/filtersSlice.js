import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

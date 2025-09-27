// src/utils/searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
    
      const { query, results } = action.payload;
      state[query] = results;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

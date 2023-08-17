import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, { payLoad }) => {
      state.list = [...state.list, payLoad];
    },
  },    
});
export const {addItem}=cartSlice.actions;
export default cartSlice.reducer;
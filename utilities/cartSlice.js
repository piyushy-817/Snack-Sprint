import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "appCart",
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        state.items.push(action.payload);
      },
      removeItem: (state, action) => {
        // Remove the item by filtering it out of the array
        state.items = state.items.filter(
          (item) => item.card.info.id !== action.payload.id // Compare based on item ID
        );
      },
      clearItems: (state) => {
        state.items.length = 0; // Clear the items array
      },
    },
  });

export default cartSlice.reducer
export const {addItem,removeItem, clearItems} = cartSlice.actions
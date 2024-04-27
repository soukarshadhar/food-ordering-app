import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotal: 0
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newItems = [...state.items];
      const { defaultPrice = 0, price = 0 } = action.payload.card?.info || {};
      newItems.push(action.payload);
      return {
        items: newItems,
        cartTotal: state.cartTotal + parseFloat(((defaultPrice || price)/100).toFixed(2))
      }
    },
    deleteCartItem: (state, action) => {
      const newItems = [...state.items];
      const { id = 0, defaultPrice = 0, price = 0 } = action.payload.card?.info || {};
      const index = newItems.findIndex((item) => item.card.info.id === id);
      newItems.splice(index, 1);
      return {
        items: newItems,
        cartTotal: state.cartTotal - parseFloat(((defaultPrice || price)/100).toFixed(2))
      }
    },
    clearCart: () => {
      return {
        items: [],
        cartTotal: 0
      }
    }
  }
});

export const { addCartItem, deleteCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
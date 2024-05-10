// cartSlice:
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cartList: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const existingCartIndex = state.cartList.findIndex(cart => cart.id === action.payload.id);
      if (existingCartIndex !== -1) {
        state.cartList[existingCartIndex].quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const existingCartIndex = state.cartList.findIndex(cart => cart.id === action.payload.id);
      if (existingCartIndex !== -1) {
        if (state.cartList[existingCartIndex].quantity > 1) {
          state.cartList[existingCartIndex].quantity -= 1;
          state.totalPrice -= action.payload.price;
        } else {
          state.cartList.splice(existingCartIndex, 1);
          state.totalPrice -= action.payload.price;
        }
      }
    },
    // updateQuantityInCart: (state, action) => {
    //   const existingCartItem = state.cartList.find((item) => item.id === action.payload.id);
    //   existingCartItem.quantity = action.payload.newQty;
    //   const diff = action.payload.newQty - action.payload.oldQty;
    //   if (diff > 0) {
    //     existingCartItem.price = existingCartItem.price + (action.payload.product.price * diff);
    //     state.totalPrice += (action.payload.product.price * diff);
    //   } else {
    //     let remainingQty = existingCartItem.quantity + diff;
    //     if (remainingQty <  1) {
    //       alert('The product cannot have a negative quantity');
    //       return;
    //     }
    //     existingCartItem.price = existingCartItem.price - (action.payload.product.price * Math.abs(diff));
    //     state.totalPrice -= (action.payload.product.price * Math.abs(diff));
    //     if (remainingQty ===  0) {
    //       state.cartList = state.cartList.filter((item) => item.id !== action.payload.id);
    //     } else {
    //       existingCartItem.quantity = remainingQty;
    //     }
    //   }
    // },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

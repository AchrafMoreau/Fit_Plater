import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import elemCartReducer from './ElemCartSlice'; 

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    ElemMenu: elemCartReducer, 
  }
});

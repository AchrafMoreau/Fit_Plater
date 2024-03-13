import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../features/auth/authSlice'
// import { authApi } from './services/auth/authService'
import authSlice from './redux/features/authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    // [authApi.reducerPath]: authApi.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware),
})

export default store
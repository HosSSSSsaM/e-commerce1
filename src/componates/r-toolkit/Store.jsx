import { configureStore } from '@reduxjs/toolkit'
// import Product_slices from './Product_slices'
import Cart_slices from './Cart_slices'

export const store = configureStore({
  reducer: {
    // products : Product_slices,
    cart : Cart_slices,
  },
})
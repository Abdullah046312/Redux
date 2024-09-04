import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './assets/components/slice/ProductSlice'

export default configureStore({
  reducer: {
    product:ProductSlice
  }
})
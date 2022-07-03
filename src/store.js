import { configureStore } from '@reduxjs/toolkit'
import theme from './features/theme'
export default configureStore({
  reducer: {
    theme: theme,
  }
})
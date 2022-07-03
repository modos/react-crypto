import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 0,
  },
  reducers: {
    change: (state) => {
        if (state.value === 0) {
            state.value = 1;
        }else {
            state.value = 0;
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { change } = themeSlice.actions

export default themeSlice.reducer
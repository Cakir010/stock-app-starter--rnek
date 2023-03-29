import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 name: 'stock',
}

const stockSlice = createSlice({
 
  initialState:{
    purchases: null,
    sales: null,
    brands: null,
    firms: null,
    products: null,
    categories: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
        state.loading = true
        state.error = false
      },
      getSuccess: (state, { payload: { data, url } }) => {
        state.loading = false
        state[url] = data
      },
      fetchFail: (state) => {
        state.loading = false
        state.error = true
      },
    }
});

export const {} = stockSlice.actions

export default stockSlice.reducer
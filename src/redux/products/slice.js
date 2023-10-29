import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, addHookah, addAccessory } from './operations';
import { addCoal, addTobacco, addImages, publishProduct } from './operations';
import { getHookahs, getAccessories, getCoals, getTobacco } from './operations';

const initialState = {
  response: null,
  products: [],
  error: null,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    const getOperations = [
      { thunk: getAllProducts },
      { thunk: getAccessories },
      { thunk: getCoals },
      { thunk: getHookahs },
      { thunk: getTobacco },
    ];

    getOperations.forEach(({ thunk }) => {
      builder
        .addCase(thunk.pending, state => {
          state.isLoading = true;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
          state.error = null;
        });
    });
    const asyncOperations = [
      { thunk: addHookah },
      { thunk: addAccessory },
      { thunk: addCoal },
      { thunk: addTobacco },
      { thunk: addImages },
      { thunk: publishProduct },
    ];

    asyncOperations.forEach(({ thunk }) => {
      builder
        .addCase(thunk.pending, state => {
          state.isLoading = true;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.response = action.payload;
          state.isLoading = false;
          state.error = null;
        });
    });
  },
});

export default productsSlice.reducer;

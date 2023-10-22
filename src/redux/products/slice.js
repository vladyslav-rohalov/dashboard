import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, addHookah, addAccessory } from './operations';
import { addCoal, addTobacco } from './operations';

const initialState = {
  response: null,
  products: [],
  hookahs: [],
  tobacco: [],
  coals: [],
  accessories: [],
  error: null,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      });

    const asyncOperations = [
      { thunk: addHookah },
      { thunk: addAccessory },
      { thunk: addCoal },
      { thunk: addTobacco },
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

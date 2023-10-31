import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, addHookah, addAccessory } from './operations';
import { addCoal, addTobacco, addImages, publishProduct } from './operations';
import { getHookahs, getAccessories, getCoals, getTobacco } from './operations';
import { getProductById } from './operations';

const initialState = {
  response: null,
  products: [],
  error: null,
  isLoading: false,
};

const getOperations = [
  { thunk: getAllProducts },
  { thunk: getAccessories },
  { thunk: getCoals },
  { thunk: getHookahs },
  { thunk: getTobacco },
];

const postOperations = [
  { thunk: addHookah },
  { thunk: addAccessory },
  { thunk: addCoal },
  { thunk: addTobacco },
  { thunk: addImages },
  { thunk: publishProduct },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        const updatedProducts = state.products.products.map(product => {
          if (product.id === action.payload.id) {
            return action.payload;
          }
          return product;
        });

        state.products = { ...state.products, products: updatedProducts };
        state.isLoading = false;
        state.error = null;
      });
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

    postOperations.forEach(({ thunk }) => {
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

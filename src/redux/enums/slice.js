import { createSlice } from '@reduxjs/toolkit';
import { getAllEnums, addBrand, addAccessoryType } from './operations';
import { addBowlType, addHookahSize, addColor } from './operations';
import { addFlavor, addPromotion } from './operations';

const initialState = {
  enums: {
    types: [],
    bowl_types: [],
    brands: [],
    colors: [],
    flavors: [],
    hookah_size: [],
    promotions: [],
  },
  error: null,
  isLoading: false,
};

export const enumSlice = createSlice({
  name: 'enum',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllEnums.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllEnums.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllEnums.fulfilled, (state, action) => {
        state.enums = action.payload;
        state.isLoading = false;
        state.error = null;
      });

    const asyncOperations = [
      { thunk: addBrand, key: 'brands' },
      { thunk: addAccessoryType, key: 'types' },
      { thunk: addBowlType, key: 'bowl_types' },
      { thunk: addHookahSize, key: 'hookah_size' },
      { thunk: addColor, key: 'colors' },
      { thunk: addFlavor, key: 'flavors' },
      { thunk: addPromotion, key: 'promotions' },
    ];

    asyncOperations.forEach(({ thunk, key }) => {
      builder
        .addCase(thunk.pending, state => {
          state.isLoading = true;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.enums[key].push(action.payload);
          state.isLoading = false;
          state.error = null;
        });
    });
  },
});

export default enumSlice.reducer;

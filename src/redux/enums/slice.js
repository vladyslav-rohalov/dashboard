import { createSlice } from '@reduxjs/toolkit';
import { getAllEnums } from './operations';

const initialState = {
  enums: {
    types: null,
    bowl_types: null,
    brands: null,
    colors: null,
    flavors: null,
    hookah_size: null,
    promotions: null,
  },
  isLogin: false,
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
  },
});

export default enumSlice.reducer;

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
      })

      .addCase(addBrand.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBrand.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addBrand.fulfilled, (state, action) => {
        state.enums.brands.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addAccessoryType.pending, state => {
        state.isLoading = true;
      })
      .addCase(addAccessoryType.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addAccessoryType.fulfilled, (state, action) => {
        state.enums.types.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addBowlType.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBowlType.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addBowlType.fulfilled, (state, action) => {
        state.enums.bowl_types.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addHookahSize.pending, state => {
        state.isLoading = true;
      })
      .addCase(addHookahSize.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addHookahSize.fulfilled, (state, action) => {
        state.enums.hookah_size.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addColor.pending, state => {
        state.isLoading = true;
      })
      .addCase(addColor.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addColor.fulfilled, (state, action) => {
        state.enums.colors.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addFlavor.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFlavor.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addFlavor.fulfilled, (state, action) => {
        state.enums.flavors.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addPromotion.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPromotion.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addPromotion.fulfilled, (state, action) => {
        state.enums.promotions.push(action.payload);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default enumSlice.reducer;

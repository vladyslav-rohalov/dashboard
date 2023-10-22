import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const getAllEnums = createAsyncThunk('enums', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/enums');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      message: e.response.data.message,
      status: e.response.status,
    });
  }
});

const createAsyncEnumThunk = (type, url) => {
  return createAsyncThunk(type, async (data, thunkAPI) => {
    try {
      const response = await axios.post(`api/enum/${url}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  });
};

export const addBrand = createAsyncEnumThunk('brand', 'brand');
export const addPromotion = createAsyncEnumThunk('promotion', 'promotion');
export const addBowlType = createAsyncEnumThunk('bowl-type', 'bowl-type');
export const addColor = createAsyncEnumThunk('color', 'color');
export const addHookahSize = createAsyncEnumThunk('hookah-size', 'hookah-size');
export const addFlavor = createAsyncEnumThunk('flavor', 'flavor');
export const addAccessoryType = createAsyncEnumThunk(
  'accessory-type',
  'accessory-type'
);

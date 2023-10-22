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

const createAsyncCommonThunk = (type, url) => {
  return createAsyncThunk(type, async (data, thunkAPI) => {
    try {
      const response = await axios.post(`api/${url}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  });
};

export const addBrand = createAsyncCommonThunk('brand', 'enum/brand');
export const addPromotion = createAsyncCommonThunk(
  'promotion',
  'enum/promotion'
);
export const addBowlType = createAsyncCommonThunk(
  'bowl-type',
  'enum/bowl-type'
);
export const addColor = createAsyncCommonThunk('color', 'enum/color');
export const addHookahSize = createAsyncCommonThunk(
  'hookah-size',
  'enum/hookah-size'
);
export const addFlavor = createAsyncCommonThunk('flavor', 'enum/flavor');
export const addAccessoryType = createAsyncCommonThunk(
  'accessory-type',
  'enum/accessory-type'
);

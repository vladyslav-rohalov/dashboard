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

export const addBrand = createAsyncThunk('brand', async (data, thunkAPI) => {
  try {
    const response = await axios.post('api/enum/brand', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      message: e.response.data.message,
      status: e.response.status,
    });
  }
});

export const addPromotion = createAsyncThunk(
  'promotion',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('api/enum/promotion', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const addBowlType = createAsyncThunk(
  'bowl-type',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('api/enum/bowl-type', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const addColor = createAsyncThunk('color', async (data, thunkAPI) => {
  try {
    const response = await axios.post('api/enum/color', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      message: e.response.data.message,
      status: e.response.status,
    });
  }
});

export const addHookahSize = createAsyncThunk(
  'hookah-size',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('api/enum/hookah-size', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const addFlavor = createAsyncThunk('flavor', async (data, thunkAPI) => {
  try {
    const response = await axios.post('api/enum/flavor', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      message: e.response.data.message,
      status: e.response.status,
    });
  }
});

export const addAccessoryType = createAsyncThunk(
  'accessory-type',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('api/enum/accessory-type', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

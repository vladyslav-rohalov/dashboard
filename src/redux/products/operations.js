import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const getAllProducts = createAsyncThunk(
  'api/products',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/products');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const addImages = createAsyncThunk(
  'add/images',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`api/products/${data.id}`, data.images);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

const createAsyncCommonThunk = (type, url, method) => {
  return createAsyncThunk(type, async (data, thunkAPI) => {
    try {
      const response = await axios[method](`api/${url}`, data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  });
};

export const addHookah = createAsyncCommonThunk(
  'create/hookahs',
  'products/hookahs',
  'post'
);
export const addTobacco = createAsyncCommonThunk(
  'create/tobacco',
  'products/tobacco',
  'post'
);
export const addCoal = createAsyncCommonThunk(
  'create/coals',
  'products/coals',
  'post'
);
export const addAccessory = createAsyncCommonThunk(
  'create/accessory',
  'products/accessories',
  'post'
);

// export const getHookahs = createAsyncCommonThunk(
//   'get/hookahs',
//   'products/hookahs',
//   'get'
// );

// export const getTobacco = createAsyncCommonThunk(
//   'get/tobacco',
//   'products/tobacco',
//   'get'
// );

// export const getCoals = createAsyncCommonThunk(
//   'get/coals',
//   'products/coals',
//   'get'
// );

// export const getAccessories = createAsyncCommonThunk(
//   'get/accessories',
//   'products/accessories',
//   'get'
// );

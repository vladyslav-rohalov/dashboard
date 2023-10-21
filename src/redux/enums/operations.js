import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const getAllEnums = createAsyncThunk('enums', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/enums');
    console.log(response);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      message: e.response.data.message,
      status: e.response.status,
    });
  }
});

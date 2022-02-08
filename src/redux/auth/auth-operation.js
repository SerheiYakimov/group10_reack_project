import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    token.set(data.data.token);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const signUp = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { email, password } = credentials;
    const { data } = await axios.post('/api/auth/signup', credentials);

    if (data.status === 'success') {
      const { data } = await axios.post('/api/auth/login', { email, password });
      token.set(data.data.token);

      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.get('/api/auth/logout');
    token.unset();

    return data;
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refreh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      const { data } = await axios.get('/api/auth/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const authGoogle = createAsyncThunk(
  '/google-redirect',
  async (useremail, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/auth/user/${useremail}`);

      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createBalance = createAsyncThunk(
  'api/auth/balance',
  async credentials => {
    try {
      const { data } = await axios.patch('api/auth/user', credentials);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const getBalance = createAsyncThunk(
  'auth/getBalance',
  async credentials => {
    try {
      const { data } = await axios.get('/api/auth/user/balance', credentials);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

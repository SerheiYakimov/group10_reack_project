import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAPI from '../../services/auth-api';

const register = createAsyncThunk(
  '/auth/registration',
  async (newUser, { rejectWithValue }) => {
    console.log(`newUser in auth-operation`, newUser);

    try {
      const data = await authAPI.register(newUser);
      console.log(`data in auth-operation`, data);
      toast.success(
        `На Ваш email отправлено письмо. Пройдите, пожалуйста, верификацию`,
        { duration: 4000 },
      );
      return data;
    } catch (error) {
      console.log(`error.messageRegister`, error);
      toast.error(
        'Упс, что-то пошло не так :( Попробуйте еще раз, пожалуйста. Если ошибка повторяется, обратитесь в службу поддержки',
      );
      return rejectWithValue(error.message);
    }
  },
);

const compliteRegistration = createAsyncThunk(
  '/register',
  async (_, { rejectWithValue }) => {
    const data = { isVerified: true };
    toast.success(`Регистрация подтверждена`, { duration: 4000 });
    return data;
  },
);

const logIn = createAsyncThunk(
  '/auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authAPI.logIn(user);
      console.log(`data in auth-operation`, data);
      return data;
    } catch (error) {
      console.log(`error.messageLogIn`, error);
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authAPI.logOut();
      console.log(`data in auth-operation`, data);
      return data;
    } catch (error) {
      console.log(`error.messageInLogOut`, error);
      return rejectWithValue(error.message);
    }
  },
);

const getCurrentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      authAPI.token.set(persistedToken);
      const currentUser = await authAPI.getCurrentUser();
      console.log(`currentUser in auth-operation`, currentUser);
      return currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const userFromGoogleAuth = createAsyncThunk(
  '/auth/google',
  async (token, { rejectWithValue }) => {
    try {
      console.log(`token in auth-operation`, token);
      const data = await authAPI.getGoogleUser(token);
      const fullData = { ...data, token };
      console.log(`data in auth-operation`, data);
      return fullData;
    } catch (error) {
      console.log(`error in auth-operation`, error);
      return rejectWithValue(error.message);
    }
  },
);

export const setUserBalance = createAsyncThunk(
  '/users/setUserBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/', newBalance);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserBalance = createAsyncThunk(
  '/users/getUserBalance',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/users/');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  compliteRegistration,
  userFromGoogleAuth,
};

export default authOperations;

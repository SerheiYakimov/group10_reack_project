import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAPI from '../../services/auth-api';

const register = createAsyncThunk(
  '/auth/registration',
  async (newUser, { rejectWithValue }) => {
    console.log(`newUser in auth-operation`, newUser);

    try {
      const data = await authAPI.register(newUser);
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
    const persistedToken = state.auth.token;

    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      authAPI.tokenAPI.set(persistedToken);
      const currentUser = await authAPI.getCurrentUser();
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
      return fullData;
    } catch (error) {
      console.log(`error in auth-operation`, error);
      return rejectWithValue(error.message);
    }
  },
);

const setUserBalance = createAsyncThunk(
  '/users/balance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const data = await authAPI.updateUserBalance(newBalance);
      return data;
    } catch (error) {
      console.log(`error.messageInLogOut`, error);
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
  setUserBalance,
};

export default authOperations;

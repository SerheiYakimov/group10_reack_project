import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';
import {
  addTransactionToStore,
  deleteTransaction,
} from '../transactions/operations';

const initialState = {
  user: {
    email: null,
    avatarURL: null,
    name: null,
    id: null,
    balance: null,
    verifyToken: null,
  },
  token: null,
  isVerified: false,
  isLoggedIn: false,
  isSendEmailVerify: false,
  isRefreshingCurrentUser: false,
  isRefreshingBalance: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user.email = action.payload.data.email;
      state.user.name = action.payload.data.name;
      state.user.id = action.payload.data.id;
      state.user.balance = action.payload.data.balance;
      state.isSendEmailVerify = action.payload.data.isSendEmailVerify;
      state.isLoggedIn = false;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.token = action.payload.data.user.token;
      state.user.name = action.payload.data.user.name;
      state.user.avatarURL = action.payload.data.user.avatar;
      state.user.balance = action.payload.data.user.balance;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user.email = null;
      state.user.avatarURL = null;
      state.user.name = null;
      state.user.balance = null;
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
      state.isRefreshingBalance = true;
    },

    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.user.avatarURL = action.payload.data.user.avatarURL;
      state.user.balance = action.payload.data.user.balance;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
      state.isRefreshingBalance = false;
    },

    [authOperations.getCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
      state.isRefreshingBalance = false;
    },

    [authOperations.compliteRegistration.fulfilled](state, action) {
      state.isVerified = action.payload.isVerified;
    },

    [authOperations.userFromGoogleAuth.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.user.avatarURL = action.payload.data.user.avatarURL;
      state.user.balance = action.payload.data.user.balance;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
      state.isRefreshingBalance = false;
    },

    [authOperations.getUserBalance.fulfilled](state, action) {
      state.user.balance = action.payload.data.user.balance;
    },

    [authOperations.setUserBalance.pending](state, action) {
      state.isRefreshingBalance = true;
    },

    [authOperations.setUserBalance.fulfilled](state, action) {
      state.user.balance = action.payload.data.tempUserBalance;
      state.isRefreshingBalance = false;
    },
    [addTransactionToStore.fulfilled](state, action) {
      state.user.balance = action.payload.newBalance;
      state.isRefreshingBalance = false;
    },
    [deleteTransaction.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
      state.isRefreshingBalance = false;
    },
  },
});

export default authSlice.reducer;

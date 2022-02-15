import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

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
  isAuthenticated: false,
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
      state.isAuthenticated = false;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.token = action.payload.data.user.token;
      state.user.name = action.payload.data.user.name;
      state.user.avatarURL = action.payload.data.user.avatarURL;
      state.isLoggedIn = true;
      state.isAuthenticated = true;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user.email = null;
      state.user.avatarURL = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthenticated = false;
    },

    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
      state.isAuthenticated = true;
    },

    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.user.avatarURL = action.payload.data.user.avatarURL;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
      state.isAuthenticated = true;
    },

    [authOperations.getCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
      state.isAuthenticated = false;
    },

    [authOperations.compliteRegistration.fulfilled](state, action) {
      state.isVerified = action.payload.isVerified;
    },

    [authOperations.userFromGoogleAuth.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.user.avatarURL = action.payload.data.user.avatarURL;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
      state.isAuthenticated = true;
    },
  },
});

export default authSlice.reducer;

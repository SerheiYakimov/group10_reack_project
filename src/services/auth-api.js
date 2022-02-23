import { token, axiosServer } from './axios-defaults';

async function register(newUser) {
  const { data } = await axiosServer.post('/auth/registration', newUser);
  return data;
}

async function logIn(user) {
  const { data } = await axiosServer.post('/auth/login', user);
  token.set(data.data.user.token);
  return data;
}

async function logOut() {
  const { data } = await axiosServer.post('/auth/logout');
  token.unset();
  return data;
}

async function getCurrentUser() {
  const { data } = await axiosServer.get('/users/current');
  return data;
}

async function getBalance() {
  const { data } = await axiosServer.get('/users/current');
  console.log('data in auth-api:', data);
  return data;
}

async function getGoogleUser(userToken) {
  token.set(userToken);
  const { data } = await axiosServer.get('/users/current');
  return data;
}

async function verifyUser() {
  const { data } = await axiosServer.get('/auth/verify');
  token.set(data.data.token);
  return data;
}

async function updateUserBalance(newBalance) {
  const { data } = await axiosServer.patch('/users/balance', newBalance);
  return data;
}

const authAPI = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  getGoogleUser,
  verifyUser,
  updateUserBalance,
  getBalance,
};

export default authAPI;

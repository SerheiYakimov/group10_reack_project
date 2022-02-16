import { token, axiosServer } from './axios-defaults';

const tokenAPI = token;

async function register(newUser) {
  const { data } = await axiosServer.post('/auth/registration', newUser);
  console.log(`data in auth-api`, data);
  return data;
}

async function logIn(user) {
  const { data } = await axiosServer.post('/auth/login', user);
  console.log(`data in auth-api`, data);
  token.set(data.data.user.token);
  return data;
}

async function logOut() {
  const { data } = await axiosServer.post('/auth/logout');
  console.log(`data in auth-api`, data);
  token.unset();
  return data;
}

async function getCurrentUser() {
  const { data } = await axiosServer.get('/users/current');
  console.log(`data in auth-api`, data);
  return data;
}

async function getGoogleUser(userToken) {
  token.set(userToken);
  const { data } = await axiosServer.get('/users/current');
  console.log(`data in auth-api`, data);
  return data;
}

async function verifyUser() {
  const { data } = await axiosServer.get('/auth/verify');
  console.log(`data in auth-api`, data);
  token.set(data.data.token);
  return data;
}

async function updateUserBalance(newBalance) {
  const { data } = await axiosServer.patch('/users/balance', newBalance);
  console.log(`data in auth-api balance`, data);
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
  tokenAPI,
};

export default authAPI;

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

async function register(newUser) {
  const { data } = await axios.post('/auth/registration', newUser);
  console.log(`data in auth-api`, data);
  return data;
}

async function logIn(user) {
  const { data } = await axios.post('/auth/login', user);
  console.log(`data in auth-api`, data);
  token.set(data.data.user.token);
  return data;
}

async function logOut() {
  const { data } = await axios.post('/auth/logout');
  console.log(`data in auth-api`, data);
  token.unset();
  return data;
}

async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  console.log(`data in auth-api`, data);
  return data;
}

async function getGoogleUser() {
  const { data } = await axios.get('/auth/google');
  console.log(`data in auth-api`, data);
  token.set(data.data.token);
  return data;
}

async function verifyUser() {
  const { data } = await axios.get('/auth/verify');
  console.log(`data in auth-api`, data);
  token.set(data.data.token);
  return data;
}

const authAPI = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  getGoogleUser,
  verifyUser,
  token,
};

export default authAPI;

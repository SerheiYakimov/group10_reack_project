import axios from 'axios';

export const axiosServer = axios.create({
  baseURL: `https://kapusta-api-group10.herokuapp.com/api`,
  // baseURL: `http://localhost:3001/api`,
});

export const token = {
  set(token) {
    axiosServer.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axiosServer.defaults.headers.common['Authorization'] = '';
  },
};

/* Для использования axios в своем файле с настройками текущего baseURL 
и возможности установки или сброса токена авторизации (token.set, token.unset)  
необходимо импортировать эти функции себе в файл.
Пример: import { axiosServer } from './axios-defaults';
И использовать axiosServer вместо axios, токен - для установки или сброса токена авторизации (если нужно). */

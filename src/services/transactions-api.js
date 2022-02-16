import { axiosServer } from './axios-defaults';
// import axios from 'axios';

axiosServer.baseURL = 'http://localhost:3001/api';

async function getAllTransactions(date) {
  const { data } = await axiosServer.get(
    `/transactions/total-sum-by-month`,
    date,
  );
  console.log(`data in transactions`, data);
  return data;
}

export default getAllTransactions;

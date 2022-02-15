import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

async function getAllTransactions(id) {
  const { data } = await axios.get(`/transactions/total-sum-by-month/${id}`);
  console.log(`data in transactions`, data);
  return data;
}

export default getAllTransactions;

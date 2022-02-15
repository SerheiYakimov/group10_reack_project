import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api';

async function removeOperation(id) {
  const { data } = await axios.delete(`/transactions/removeOperation/${id}`);
  console.log(`delete transaction`, data, id);

  return id;
}

const transactionApi = {
  removeOperation,
};

export default transactionApi;

export const getAllTransactions = state => state.transactions.items;
export const getMonth = state => state.transactions.date.month;
export const getYear = state => state.transactions.date.year;
export const getAllSum = state => state.transactions;

const TransactionSelectors = {
  getAllTransactions,
  getMonth,
  getYear,
  getAllSum,
};

export default TransactionSelectors;

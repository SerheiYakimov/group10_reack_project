export const getAllTransactions = state => state.transactions.items;
export const getMonth = state => state.transactions.date.month;
export const getYear = state => state.transactions.date.year;
export const getAllSum = state => state.transactions;
export const getSubcategoryData = state => state.transactions.itemsSub[0];

const TransactionSelectors = {
  getAllTransactions,
  getMonth,
  getYear,
  getAllSum,
  getSubcategoryData,
};

export default TransactionSelectors;

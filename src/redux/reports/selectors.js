const getSummaryData = state => state.auth.user.summaryData;
const getIncomesData = state => state.auth.user.incomesData;
const getOutcomesData = state => state.auth.user.outcomesData;
const getCategoryData = state => state.auth.user.categoryData;

const getSumByMonth = state => state.transactions.data;

const reportSelectors = {
  getSummaryData,
  getIncomesData,
  getOutcomesData,
  getCategoryData,
  getSumByMonth,
};

export default reportSelectors;

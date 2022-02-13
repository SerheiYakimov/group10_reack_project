export const getAllTransactions = state => state.transactions.items;
export const getAllExpenses = state => state.transactions.monthExpenses;
export const getAllIncome = state => state.transactions.monthIncome;
export const getMonth = state => state.transactions.date.month;
export const getYear = state => state.transactions.date.year;

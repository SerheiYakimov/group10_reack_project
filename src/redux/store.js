import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import transactionsReducer from './transactions/slice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export const persistor = persistStore(store);

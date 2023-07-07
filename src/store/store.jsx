import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './stateSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

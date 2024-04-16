import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../feature/listSlice';

export const store = configureStore({
  reducer: {
     todo : listReducer
  },
})
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slicers/filterSlice';

export const store = configureStore({
  reducer: { filter: filterReducer },
});

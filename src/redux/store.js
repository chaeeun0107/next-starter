import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './rootReducer';

export const makeStore = (context) => configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper(makeStore);

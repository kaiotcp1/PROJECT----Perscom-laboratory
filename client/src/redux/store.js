import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export default store;
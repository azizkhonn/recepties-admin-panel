import { configureStore } from '@reduxjs/toolkit';
import todayMenuReducer from '../reducer/userReducer';

const store = configureStore({
  reducer: {
    todayMenu: todayMenuReducer,
  },
});

export default store;

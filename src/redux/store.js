import { configureStore } from '@reduxjs/toolkit';
import { contactUser } from './contactUser/contactUser';

export const store = configureStore({
  reducer: {
    contact: contactUser.reducer,
  },
});

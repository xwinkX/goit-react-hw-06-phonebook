import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { contactUser } from './contactUser/contactUser';

const persistConfig = {
  key: 'contact',
  storage,
  // whitelist: ['items'],
};

const persistedContactreducer = persistReducer(persistConfig, contactUser);

const store = configureStore({
  reducer: {
    contact: persistedContactreducer.reducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };

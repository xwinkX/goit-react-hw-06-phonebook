import { createSlice } from '@reduxjs/toolkit';

export const contactUser = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      return state.items.filter(item => item.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, filterContacts } = contactUser.actions;

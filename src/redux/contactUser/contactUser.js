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
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts(state, action) {
      const normalizedFilter = action.payload.toLowerCase();
      state.items = state.items.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
  },
});

export const { addContacts, removeContacts, filterContacts } =
  contactUser.actions;

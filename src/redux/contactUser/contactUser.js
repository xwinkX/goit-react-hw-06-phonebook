import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const contactUser = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts: (state, action) => {
      const normalizedFilter = action.payload.toLowerCase();
      state.items = state.items.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
  },
});

export const { addContacts, removeContacts, filterContacts } =
  contactUser.actions;

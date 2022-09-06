import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const contact = createSlice({
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
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, filterContacts } = contact.actions;

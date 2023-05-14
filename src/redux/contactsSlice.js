import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: contactsInitialState,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data = [...state.data, action.payload];
      },

      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/Api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch ({ responce }) {
      alert(responce.data);
      return thunkAPI.rejectWithValue(responce.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ responce }) {
      alert(responce.data);
      return thunkAPI.rejectWithValue(responce.data);
    }
  },
  {
    condition: ({ name }, thunkAPI) => {
      const { contacts } = thunkAPI.getState();
      const normalized = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return normalized === name.toLowerCase();
      });
      if (result) {
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ responce }) {
      alert(responce.data);
      return thunkAPI.rejectWithValue(responce.data);
    }
  }
);

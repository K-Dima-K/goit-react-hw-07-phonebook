import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contacts/contactsSlice';
import filterSlice from './filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});

export default rootReducer;

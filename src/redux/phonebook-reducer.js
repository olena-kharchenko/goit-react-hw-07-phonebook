import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './phonebook-actions';

const initialContacts = [
  { id: 'id-1', name: 'Elon Mask', number: '10664888778' },
  { id: 'id-2', name: 'Lena Kharchenko', number: '380664969795' },
  { id: 'id-3', name: 'Bill Gates', number: '10662475771' },
  { id: 'id-4', name: 'Mark Zuckerberg ', number: '10625884318' },
];

const items = createReducer(initialContacts, {
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});

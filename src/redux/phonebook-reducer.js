import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';
// import types from './phonebook-types';

const initialContacts = [
  { id: 'id-1', name: 'Elon Mask', number: '10664888778' },
  { id: 'id-2', name: 'Lena Kharchenko', number: '380664969795' },
  { id: 'id-3', name: 'Bill Gates', number: '10662475771' },
  { id: 'id-4', name: 'Mark Zuckerberg ', number: '10625884318' },
];

//*** Step 2 ***
const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

//*** Step 1 ***
// const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     case types.OVERWRITE:
//       return [...payload];

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span className={s.heart}>&hearts;</span>
          <p className={s.text}>
            {name}: {number}
          </p>
          <span className={s.span}></span>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          >
            <span className={s.times}>&times;</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

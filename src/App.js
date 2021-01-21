import { useRef, useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from './redux/phonebook-selectors';
import * as phonebookActions from './redux/phonebook-actions';
import Container from './components/Container';
import Section from './components/Section';
import MyForm from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  //*** Step 2 ***
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  //     if (parsedContacts) {
  //       dispatch(phonebookActions.overwriteContacts(parsedContacts));
  //       // onFirstRender(parsedContacts);
  //     }

  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <MyForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

//*** Step 1 ***
// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onFirstRender: parsedContacts =>
//     dispatch(phonebookActions.overwriteContacts(parsedContacts)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

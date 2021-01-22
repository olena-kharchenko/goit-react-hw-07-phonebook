import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from './redux/phonebook-selectors';
import * as phonebookActions from './redux/phonebook-actions';
import Container from './components/Container';
import Section from './components/Section';
import MyForm from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);

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

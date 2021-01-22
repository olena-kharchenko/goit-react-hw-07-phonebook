import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts, getLoader } from './redux/phonebook-selectors';
import * as phonebookOperations from './redux/phonebook-operations';
import Container from './components/Container';
import Section from './components/Section';
import MyForm from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);
  const onFirstLoad = () => dispatch(phonebookOperations.fetchContacts());
  const loader = useSelector(getLoader);

  useEffect(() => {
    if (isFirstRender.current) {
      onFirstLoad();

      isFirstRender.current = false;
      return;
    }
  }, []);

  return (
    <Container>
      <Section title="Phonebook">
        <MyForm />
        {loader && <p>Loading...</p>}
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

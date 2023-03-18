import { useSelector } from 'react-redux';

import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import Loader from 'shared/components/Loader/Loader';

import css from './App.module.css';

const App = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <div className={css.root}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {isContacts ? <ContactList /> : <p>Contact list is empty</p>}
    </div>
  );
};

export default App;

import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { fetchDeleteContact } from 'redux/contacts/contactsOperations';

import css from './ContactList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const elements = filteredContacts.map(({ id, name, phone }) => (
    <li key={id}>
      <span className={css.text}>
        {name}: {phone}
      </span>
      <button
        className={css.removeBtn}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.contacts}>{elements}</ul>;
};

export default ContactsList;

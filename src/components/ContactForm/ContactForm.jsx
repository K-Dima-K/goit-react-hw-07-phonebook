import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contactsOperations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, phone } = state;

  const handleAddContact = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, phone }));

    setState({
      name: '',
      phone: '',
    });
  };

  return (
    <form className={css.form} onSubmit={handleAddContact}>
      <div className={css.formGroup}>
        <label className={css.label}>Name</label>
        <input
          onChange={handleChange}
          className={css.input}
          placeholder="enter name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          onChange={handleChange}
          className={css.input}
          placeholder="enter phone number"
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.submit_btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

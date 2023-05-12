import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';


const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
          ></ContactListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

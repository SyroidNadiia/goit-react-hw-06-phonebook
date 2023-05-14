import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import sharedStyles from './sharedStyles.module.css';

export const App = () => {
  return (
    <div className={sharedStyles.section}>
      <h1 className={sharedStyles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={sharedStyles.title}>Contacts</h2>
      <Filter></Filter>
      <ContactList />
    </div>
  );
};

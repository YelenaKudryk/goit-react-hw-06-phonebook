import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <>
      <Filter />
      <ContactList />
    </>
  );
};

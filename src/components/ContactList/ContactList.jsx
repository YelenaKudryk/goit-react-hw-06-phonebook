import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List, Text } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
      );
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.length === 0 && <Text>There is nothing here yet</Text>}

      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};

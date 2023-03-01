import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Button } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
